import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

import GeneticMarkerAnalysisResult from './GeneticMarkerAnalysisResult';

/**
 * Generated class for oncocore.CancerGeneticMarkerAnalysisResult.
 * @extends GeneticMarkerAnalysisResult
 */
class CancerGeneticMarkerAnalysisResult extends GeneticMarkerAnalysisResult {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {CancerGeneticMarkerAnalysisResult} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the FindingTopicCode.
   * @returns {FindingTopicCode} The shr.base.FindingTopicCode
   */
  get findingTopicCode() {
    return this._findingTopicCode;
  }

  /**
   * Set the FindingTopicCode.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   */
  set findingTopicCode(findingTopicCode) {
    this._findingTopicCode = findingTopicCode;
  }

  /**
   * Set the FindingTopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   * @returns {CancerGeneticMarkerAnalysisResult} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
  }

  /**
   * Get the GeneName.
   * @returns {GeneName} The oncocore.GeneName
   */
  get geneName() {
    return this._geneName;
  }

  /**
   * Set the GeneName.
   * @param {GeneName} geneName - The oncocore.GeneName
   */
  set geneName(geneName) {
    this._geneName = geneName;
  }

  /**
   * Set the GeneName and return 'this' for chaining.
   * @param {GeneName} geneName - The oncocore.GeneName
   * @returns {CancerGeneticMarkerAnalysisResult} this.
   */
  withGeneName(geneName) {
    this.geneName = geneName; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CancerGeneticMarkerAnalysisResult class.
   * The JSON must be valid against the CancerGeneticMarkerAnalysisResult JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CancerGeneticMarkerAnalysisResult} An instance of CancerGeneticMarkerAnalysisResult populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CancerGeneticMarkerAnalysisResult();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CancerGeneticMarkerAnalysisResult class to a JSON object.
   * The JSON is expected to be valid against the CancerGeneticMarkerAnalysisResult JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/oncocore/CancerGeneticMarkerAnalysisResult' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.findingResult != null) {
      inst['FindingResult'] = typeof this.findingResult.toJSON === 'function' ? this.findingResult.toJSON() : this.findingResult;
    }
    if (this.findingTopicCode != null) {
      inst['FindingTopicCode'] = typeof this.findingTopicCode.toJSON === 'function' ? this.findingTopicCode.toJSON() : this.findingTopicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.nonIndependentFinding != null) {
      inst['NonIndependentFinding'] = this.nonIndependentFinding.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.genomicSourceClass != null) {
      inst['GenomicSourceClass'] = typeof this.genomicSourceClass.toJSON === 'function' ? this.genomicSourceClass.toJSON() : this.genomicSourceClass;
    }
    if (this.geneName != null) {
      inst['GeneName'] = typeof this.geneName.toJSON === 'function' ? this.geneName.toJSON() : this.geneName;
    }
    if (this.dNARegionName != null) {
      inst['DNARegionName'] = typeof this.dNARegionName.toJSON === 'function' ? this.dNARegionName.toJSON() : this.dNARegionName;
    }
    if (this.dNASequenceVariantName != null) {
      inst['DNASequenceVariantName'] = typeof this.dNASequenceVariantName.toJSON === 'function' ? this.dNASequenceVariantName.toJSON() : this.dNASequenceVariantName;
    }
    if (this.dNASequenceVariantId != null) {
      inst['DNASequenceVariantId'] = typeof this.dNASequenceVariantId.toJSON === 'function' ? this.dNASequenceVariantId.toJSON() : this.dNASequenceVariantId;
    }
    if (this.dNASequenceVariantType != null) {
      inst['DNASequenceVariantType'] = typeof this.dNASequenceVariantType.toJSON === 'function' ? this.dNASequenceVariantType.toJSON() : this.dNASequenceVariantType;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CancerGeneticMarkerAnalysisResult class.
   * The FHIR must be valid against the CancerGeneticMarkerAnalysisResult FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CancerGeneticMarkerAnalysisResult} An instance of CancerGeneticMarkerAnalysisResult populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new CancerGeneticMarkerAnalysisResult();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/oncocore/CancerGeneticMarkerAnalysisResult');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/geneticsDNARegionName') {
        inst.dNARegionName = FHIRHelper.createInstanceFromFHIR('oncocore.DNARegionName', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/geneticsDNASequenceVariation') {
        inst.dNASequenceVariantName = FHIRHelper.createInstanceFromFHIR('oncocore.DNASequenceVariantName', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/geneticsDNASequenceVariationType') {
        inst.dNASequenceVariantType = FHIRHelper.createInstanceFromFHIR('oncocore.DNASequenceVariantType', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/geneticsGene') {
        inst.geneName = FHIRHelper.createInstanceFromFHIR('oncocore.GeneName', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/geneticsGenomicSourceClass') {
        inst.genomicSourceClass = FHIRHelper.createInstanceFromFHIR('oncocore.GenomicSourceClass', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/geneticsVariationId') {
        inst.dNASequenceVariantId = FHIRHelper.createInstanceFromFHIR('oncocore.DNASequenceVariantId', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['status'] != null) {
      inst.findingStatus = FHIRHelper.createInstanceFromFHIR('shr.base.FindingStatus', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.findingTopicCode = FHIRHelper.createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['subject'] != null) {
      const entryId = fhir['subject']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.patient = mappedResources[entryId];
    }
    if (fhir['encounter'] != null) {
      const entryId = fhir['encounter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.encounter = mappedResources[entryId];
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.relevantTime = FHIRHelper.createInstanceFromFHIR('shr.base.RelevantTime', fhir['effectiveDateTime'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['dataAbsentReason'] != null) {
      inst.exceptionValue = FHIRHelper.createInstanceFromFHIR('shr.base.ExceptionValue', fhir['dataAbsentReason'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['interpretation'] != null) {
      inst.interpretation = FHIRHelper.createInstanceFromFHIR('shr.base.Interpretation', fhir['interpretation'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['comments'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['comments'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['method'] != null) {
      inst.findingMethod = FHIRHelper.createInstanceFromFHIR('shr.base.FindingMethod', fhir['method'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['specimen'] != null) {
      const entryId = fhir['specimen']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Specimen', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.specimen = mappedResources[entryId];
    }
    if (fhir['device'] != null) {
      const entryId = fhir['device']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Device', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.device = mappedResources[entryId];
    }
    for (const fhir_component of fhir['component'] || []) {
      inst.nonIndependentFinding = inst.nonIndependentFinding || [];
      const inst_nonIndependentFinding = FHIRHelper.createInstanceFromFHIR('shr.base.NonIndependentFinding', fhir_component, shrId, allEntries, mappedResources, referencesOut, false);
      inst.nonIndependentFinding.push(inst_nonIndependentFinding);
      if (fhir_component['code'] != null) {
        inst_nonIndependentFinding.findingTopicCode = FHIRHelper.createInstanceFromFHIR('shr.base.FindingTopicCode', fhir_component['code'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['valueCodeableConcept'] != null) {
        inst_nonIndependentFinding.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir_component['valueCodeableConcept'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['valueQuantity'] != null) {
        inst_nonIndependentFinding.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir_component['valueQuantity'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['valueString'] != null) {
        inst_nonIndependentFinding.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir_component['valueString'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['valueRange'] != null) {
        inst_nonIndependentFinding.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir_component['valueRange'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['valueRatio'] != null) {
        inst_nonIndependentFinding.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir_component['valueRatio'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['valueTime'] != null) {
        inst_nonIndependentFinding.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir_component['valueTime'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['valueDateTime'] != null) {
        inst_nonIndependentFinding.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir_component['valueDateTime'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_component['dataAbsentReason'] != null) {
        inst_nonIndependentFinding.exceptionValue = FHIRHelper.createInstanceFromFHIR('shr.base.ExceptionValue', fhir_component['dataAbsentReason'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_component_referenceRange of fhir_component['referenceRange'] || []) {
        inst_nonIndependentFinding.referenceRange = FHIRHelper.createInstanceFromFHIR('shr.base.ReferenceRange', fhir_component_referenceRange, shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default CancerGeneticMarkerAnalysisResult;
