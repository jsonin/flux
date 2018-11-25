import { setPropertiesFromJSON } from '../../json-helper';

import VitalSign from './VitalSign';

/**
 * Generated class for shr.vital.BloodPressure.
 * @extends VitalSign
 */
class BloodPressure extends VitalSign {

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
   * @returns {BloodPressure} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Set the value (aliases quantity) and return 'this' for chaining.
   * @param {Quantity} value - The shr.core.Quantity
   * @returns {BloodPressure} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Set the Quantity and return 'this' for chaining.
   * @param {Quantity} quantity - The shr.core.Quantity
   * @returns {BloodPressure} this.
   */
  withQuantity(quantity) {
    this.quantity = quantity; return this;
  }

  /**
   * Get the FindingMethod.
   * @returns {FindingMethod} The shr.finding.FindingMethod
   */
  get findingMethod() {
    return this._findingMethod;
  }

  /**
   * Set the FindingMethod.
   * @param {FindingMethod} findingMethod - The shr.finding.FindingMethod
   */
  set findingMethod(findingMethod) {
    this._findingMethod = findingMethod;
  }

  /**
   * Set the FindingMethod and return 'this' for chaining.
   * @param {FindingMethod} findingMethod - The shr.finding.FindingMethod
   * @returns {BloodPressure} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
  }

  /**
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Set the ObservationCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   * @returns {BloodPressure} this.
   */
  withObservationCode(observationCode) {
    this.observationCode = observationCode; return this;
  }

  /**
   * Get the BodySite.
   * @returns {BodySite} The shr.entity.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Set the BodySite and return 'this' for chaining.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   * @returns {BloodPressure} this.
   */
  withBodySite(bodySite) {
    this.bodySite = bodySite; return this;
  }

  /**
   * Get the ObservationQualifier array.
   * @returns {Array<ObservationQualifier>} The shr.finding.ObservationQualifier array
   */
  get observationQualifier() {
    return this._observationQualifier;
  }

  /**
   * Set the ObservationQualifier array.
   * @param {Array<ObservationQualifier>} observationQualifier - The shr.finding.ObservationQualifier array
   */
  set observationQualifier(observationQualifier) {
    this._observationQualifier = observationQualifier;
  }

  /**
   * Set the ObservationQualifier array and return 'this' for chaining.
   * @param {Array<ObservationQualifier>} observationQualifier - The shr.finding.ObservationQualifier array
   * @returns {BloodPressure} this.
   */
  withObservationQualifier(observationQualifier) {
    this.observationQualifier = observationQualifier; return this;
  }

  /**
   * Get the ObservationComponent array.
   * @returns {Array<ObservationComponent>} The shr.finding.ObservationComponent array
   */
  get observationComponent() {
    return this._observationComponent;
  }

  /**
   * Set the ObservationComponent array.
   * @param {Array<ObservationComponent>} observationComponent - The shr.finding.ObservationComponent array
   */
  set observationComponent(observationComponent) {
    this._observationComponent = observationComponent;
  }

  /**
   * Set the ObservationComponent array and return 'this' for chaining.
   * @param {Array<ObservationComponent>} observationComponent - The shr.finding.ObservationComponent array
   * @returns {BloodPressure} this.
   */
  withObservationComponent(observationComponent) {
    this.observationComponent = observationComponent; return this;
  }

  /**
   * Get the HeadTiltAngle.
   * @returns {HeadTiltAngle} The shr.vital.HeadTiltAngle
   */
  get headTiltAngle() {
    return this._headTiltAngle;
  }

  /**
   * Set the HeadTiltAngle.
   * @param {HeadTiltAngle} headTiltAngle - The shr.vital.HeadTiltAngle
   */
  set headTiltAngle(headTiltAngle) {
    this._headTiltAngle = headTiltAngle;
  }

  /**
   * Set the HeadTiltAngle and return 'this' for chaining.
   * @param {HeadTiltAngle} headTiltAngle - The shr.vital.HeadTiltAngle
   * @returns {BloodPressure} this.
   */
  withHeadTiltAngle(headTiltAngle) {
    this.headTiltAngle = headTiltAngle; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BloodPressure class.
   * The JSON must be valid against the BloodPressure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BloodPressure} An instance of BloodPressure populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BloodPressure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BloodPressure class to a JSON object.
   * The JSON is expected to be valid against the BloodPressure JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/vital/BloodPressure' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.valueAbsentReason != null) {
      inst['ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.relevantTime != null) {
      inst['relevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.changeFlag != null) {
      inst['ChangeFlag'] = typeof this.changeFlag.toJSON === 'function' ? this.changeFlag.toJSON() : this.changeFlag;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.observationQualifier != null) {
      inst['ObservationQualifier'] = this.observationQualifier.map(f => f.toJSON());
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.observationComponent != null) {
      inst['ObservationComponent'] = this.observationComponent.map(f => f.toJSON());
    }
    if (this.members != null) {
      inst['Members'] = typeof this.members.toJSON === 'function' ? this.members.toJSON() : this.members;
    }
    if (this.headTiltAngle != null) {
      inst['HeadTiltAngle'] = typeof this.headTiltAngle.toJSON === 'function' ? this.headTiltAngle.toJSON() : this.headTiltAngle;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BloodPressure class to a FHIR object.
   * The FHIR is expected to be valid against the BloodPressure FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.focalSubject != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubject.toFHIR(true));
    }
    if (this.focalSubjectReference != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubjectReference.toFHIR(true));
    }
    if (this.evidence != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.evidence.toFHIR(true));
    }
    if (this.changeFlag != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.changeFlag.toFHIR(true));
    }
    if (this.observationQualifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.observationQualifier.toFHIR(true));
    }
    if (this.headTiltAngle != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.headTiltAngle.toFHIR(true));
    }
    if (this.findingStatus != null) {
      inst['status'] = typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR() : this.findingStatus;
    }
    if (this.category != null) {
      inst['category'] = inst['category'] || [];
      inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.observationCode != null) {
      inst['code'] = typeof this.observationCode.toFHIR === 'function' ? this.observationCode.toFHIR() : this.observationCode;
    }
    if (this.subject != null) {
      inst['subject'] = typeof this.subject.toFHIR === 'function' ? this.subject.toFHIR() : this.subject;
    }
    if (this.relatedEncounter != null) {
      inst['context'] = typeof this.relatedEncounter.toFHIR === 'function' ? this.relatedEncounter.toFHIR() : this.relatedEncounter;
    }
    if (this.relevantTime != null) {
      inst['effective[x]'] = typeof this.relevantTime.toFHIR === 'function' ? this.relevantTime.toFHIR() : this.relevantTime;
    }
    if (this.valueAbsentReason != null) {
      inst['dataAbsentReason'] = typeof this.valueAbsentReason.toFHIR === 'function' ? this.valueAbsentReason.toFHIR() : this.valueAbsentReason;
    }
    if (this.interpretation != null) {
      inst['interpretation'] = typeof this.interpretation.toFHIR === 'function' ? this.interpretation.toFHIR() : this.interpretation;
    }
    if (this.details != null) {
      inst['comment'] = typeof this.details.toFHIR === 'function' ? this.details.toFHIR() : this.details;
    }
    if (this.bodySite != null) {
      inst['bodySite'] = typeof this.bodySite.toFHIR === 'function' ? this.bodySite.toFHIR() : this.bodySite;
    }
    if (this.findingMethod != null) {
      inst['method'] = typeof this.findingMethod.toFHIR === 'function' ? this.findingMethod.toFHIR() : this.findingMethod;
    }
    if (this.specimen != null) {
      inst['specimen'] = typeof this.specimen.toFHIR === 'function' ? this.specimen.toFHIR() : this.specimen;
    }
    if (this.device != null) {
      inst['device'] = typeof this.device.toFHIR === 'function' ? this.device.toFHIR() : this.device;
    }
    if (this.referenceRange != null) {
      inst['referenceRange'] = inst['referenceRange'] || [];
      inst['referenceRange'].concat(this.referenceRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.lowerBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['low'] = inst['referenceRange']['low'] || [];
      inst['referenceRange']['low'].concat(this.referenceRange.range.lowerBound.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.range != null && this.referenceRange.range.upperBound != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['high'] = inst['referenceRange']['high'] || [];
      inst['referenceRange']['high'].concat(this.referenceRange.range.upperBound.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.type != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['type'] = inst['referenceRange']['type'] || [];
      inst['referenceRange']['type'].concat(this.referenceRange.type.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.applicableSubpopulation != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['appliesTo'] = inst['referenceRange']['appliesTo'] || [];
      inst['referenceRange']['appliesTo'].concat(this.referenceRange.applicableSubpopulation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.referenceRange != null && this.referenceRange.applicableAgeRange != null) {
      if (inst['referenceRange'] === undefined) {
        inst['referenceRange'] = {};
      }
      inst['referenceRange']['age'] = inst['referenceRange']['age'] || [];
      inst['referenceRange']['age'].concat(this.referenceRange.applicableAgeRange.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.members != null && this.members.observation != null) {
      if (inst['related'] === undefined) {
        inst['related'] = {};
      }
      inst['related']['target'] = typeof this.members.observation.toFHIR === 'function' ? this.members.observation.toFHIR() : this.members.observation;
    }
    if (this.observationComponent != null) {
      inst['component'] = inst['component'] || [];
      inst['component'].concat(this.observationComponent.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default BloodPressure;
