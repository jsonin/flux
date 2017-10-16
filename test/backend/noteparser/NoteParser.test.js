import NoteParser from '../../../src/noteparser/NoteParser';
import moment from 'moment';
import {expect} from 'chai';

const noteParser = new NoteParser();

const today = new moment().format("D MMM YYYY");

const sampleTextEmpty = "";
const sampleTextPlain = "Nothing of substance here";
const sampleTextNonsense = "#nonsense is in the structured phrase";
const sampleTextStaging = "Debra Hernandez672 is presenting with carcinoma of the breast. #staging assessed as tumor size #T2 and #N0 + #M0.";
const sampleTextDiseaseStatus = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam";
const sampleTextDiseaseStatus2 = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #disease status #stable based on #imaging and #physical exam #as of #10/5/2017 #reference date #6/7/2017";
const sampleTextToxicity = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #toxicity #nausea #grade 2 #treatment";
const sampleTextDeceased = "Debra Hernandez672 is #deceased on #10/01/2017";
const sampleTextClinicalTrial = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #clinical trial #PATINA #enrolled on #09/04/2017 and #ended on #10/06/2017";
const sampleTextClinicalTrialMinimal = "Debra Hernandez672 is presenting with carcinoma of the breast.\n\n #clinical trial";

const expectedOutputEmpty = [[], []];
const expectedOutputPlain = [[], []];
const expectedOutputNonsense = [[], [ sampleTextNonsense] ];
const expectedOutputStaging = [ [{ 
    entryType:
      [ 'http://standardhealthrecord.org/oncology/TNMStage',
         'http://standardhealthrecord.org/observation/Observation',
         'http://standardhealthrecord.org/base/Action' ],
    value:
     { coding:
        { value: '52774001',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'IIA' } },
    specificType:
     { coding:
        { value: '21908-9',
          codeSystem: 'http://loinc.org',
          displayText: 'Stage' } },
    status: 'unknown',
    occurrenceTime: today,
    tStage:
     { coding:
        { value: '369900003',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'T2' } },
    nStage:
     { coding:
        { value: '436311000124105',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'N0' } },
    mStage:
     { coding:
        { value: '433581000124101',
          codeSystem: 'urn:oid:2.16.840.1.113883.6.96',
          displayText: 'M0' } } 
}], []];
const expectedOutputDiseaseStatus = [[{
    entryType:
      [ 'http://standardhealthrecord.org/oncology/Progression',
         'http://standardhealthrecord.org/assessment/Assessment' ],
    value:
     { coding:
        { value: 'C0205360',
          codeSystem: 'http://ncimeta.nci.nih.gov',
          displayText: 'Stable' } },
    clinicallyRelevantTime: null,
    evidence:
     [ { coding:
          { value: 'C0011923',
            codeSystem: 'http://ncimeta.nci.nih.gov',
            displayText: 'Imaging' } },
       { coding:
          { value: 'C0031809',
            codeSystem: 'http://ncimeta.nci.nih.gov',
            displayText: 'Physical exam' } } ],
    assessmentType: { coding: { value: '#disease status' } },
    status: 'unknown',
    originalCreationDate: today,
    asOfDate: null,
    lastUpdateDate: today 
}], []];
const expectedOutputDiseaseStatus2 = [[{
    entryType:
      [ 'http://standardhealthrecord.org/oncology/Progression',
         'http://standardhealthrecord.org/assessment/Assessment' ],
    value:
     { coding:
        { value: 'C0205360',
          codeSystem: 'http://ncimeta.nci.nih.gov',
          displayText: 'Stable' } },
    clinicallyRelevantTime: '7 Jun 2017',
    evidence:
     [ { coding:
          { value: 'C0011923',
            codeSystem: 'http://ncimeta.nci.nih.gov',
            displayText: 'Imaging' } },
       { coding:
          { value: 'C0031809',
            codeSystem: 'http://ncimeta.nci.nih.gov',
            displayText: 'Physical exam' } } ],
    assessmentType: { coding: { value: '#disease status' } },
    status: 'unknown',
    originalCreationDate: today,
    asOfDate: '5 Oct 2017',
    lastUpdateDate: today 
}], []];
const expectedOutputToxicity = [[{ 
    entryType:
      [ 'http://standardhealthrecord.org/oncology/ToxicReaction',
         'http://standardhealthrecord.org/adverse/AdverseReaction',
         'http://standardhealthrecord.org/adverse/AdverseEvent' ],
    value:
     { coding:
        { value: 10028813,
          codeSystem: 'https://www.meddra.org/',
          displayText: 'Nausea' } },
    adverseEventGrade:
     { coding:
        { value: 'C1513374',
          codeSystem: 'http://ncimeta.nci.nih.gov',
          displayText: 'Grade 2' } },
    attribution:
     { coding:
        { value: '#Treatment',
          codeSystem: 'https://www.meddra.org/',
          displayText: 'Treatment' } },
    originalCreationDate: today,
    lastUpdateDate: today 
}], []];
const expectedOutputDeceased = [[{
     entryType:
         [ 'http://standardhealthrecord.org/shr/actor/Deceased' ],
     value: true,
     dateOfDeath: '1 Oct 2017'
}], []];
const expectedOutputClinicalTrial = [[{
    entryType: [ 'http://standardhealthrecord.org/base/Study' ],
    title: 'PATINA',
    identifier: '',
    enrollmentDate: '4 Sep 2017',
    endDate: '6 Oct 2017'
}], []];
const expectedOutputClinicalTrialMinimal = [[{
    entryType: [ 'http://standardhealthrecord.org/base/Study' ],
    title: '',
    identifier: '',
    enrollmentDate: null,
    endDate: null
}], []];


describe('getAllTriggersRegularExpression', function () { 

    it('should return allTriggersRegExp of the parser used', function () { 
        const expectedTriggers = noteParser.allTriggersRegExp; 
        expect(noteParser.getAllTriggersRegularExpression())
            .to.eql(expectedTriggers);
    });
});


describe('parse', function() { 

    it('should return an empty record when it receives empty text', function () {
        const record = noteParser.parse(sampleTextEmpty);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputEmpty);
    });

    it('should return an empty record when it receives just plain text', function () {
        const record = noteParser.parse(sampleTextPlain);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputPlain);
    });

    it('should return an empty record when it receives just nonsense structured phrases in text', function () {
        const record = noteParser.parse(sampleTextNonsense);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputNonsense);
    });

    it('should return a patient record with staging data when parsing a note with staging phrases', function () {
        const record = noteParser.parse(sampleTextStaging);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputStaging);
    });

    it('should return a patient record with disease status data when parsing a note with disease status phrases', function () {
        const record = noteParser.parse(sampleTextDiseaseStatus);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputDiseaseStatus);
    });
    it('should return a patient record with disease status data when parsing a note with disease status phrases including dates', function () {
        const record = noteParser.parse(sampleTextDiseaseStatus2);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputDiseaseStatus2);
    });
    it('should return a patient record with toxicity data when parsing a note with toxicity phrases', function () {
        const record = noteParser.parse(sampleTextToxicity);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputToxicity);
    });
    it('should return a patient record with deceased data when parsing a note with deceased phrases', function () {
        const record = noteParser.parse(sampleTextDeceased);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputDeceased);
    });
    it('should return a patient record with study enrollment data when parsing a note with clinical trial phases', function () {
        const record = noteParser.parse(sampleTextClinicalTrial);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrial);
    });
    it('should return a patient record with study enrollment data correctly defaulted when parsing a note with only #clinical trial', function () {
        const record = noteParser.parse(sampleTextClinicalTrialMinimal);
        expect(record)
            .to.be.an('array')
            .and.to.eql(expectedOutputClinicalTrialMinimal);
    });
});
