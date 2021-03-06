import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.medication.TimingOfDoses.
 */
class TimingOfDoses {

  /**
   * Get the value (aliases timing).
   * @returns {Timing} The shr.core.Timing
   */
  get value() {
    return this._timing;
  }

  /**
   * Set the value (aliases timing).
   * This field/value is required.
   * @param {Timing} value - The shr.core.Timing
   */
  set value(value) {
    this._timing = value;
  }

  /**
   * Set the value (aliases timing) and return 'this' for chaining.
   * This field/value is required.
   * @param {Timing} value - The shr.core.Timing
   * @returns {TimingOfDoses} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Timing.
   * @returns {Timing} The shr.core.Timing
   */
  get timing() {
    return this._timing;
  }

  /**
   * Set the Timing.
   * This field/value is required.
   * @param {Timing} timing - The shr.core.Timing
   */
  set timing(timing) {
    this._timing = timing;
  }

  /**
   * Set the Timing and return 'this' for chaining.
   * This field/value is required.
   * @param {Timing} timing - The shr.core.Timing
   * @returns {TimingOfDoses} this.
   */
  withTiming(timing) {
    this.timing = timing; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TimingOfDoses class.
   * The JSON must be valid against the TimingOfDoses JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TimingOfDoses} An instance of TimingOfDoses populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TimingOfDoses();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the TimingOfDoses class to a JSON object.
   * The JSON is expected to be valid against the TimingOfDoses JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/TimingOfDoses' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the TimingOfDoses class.
   * The FHIR must be valid against the TimingOfDoses FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {TimingOfDoses} An instance of TimingOfDoses populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new TimingOfDoses();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Timing', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default TimingOfDoses;
