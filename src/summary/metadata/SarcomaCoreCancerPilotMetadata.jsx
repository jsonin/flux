import MetadataSection from "./MetadataSection";
import SarcomaSummarySection from './SarcomaSummarySection';
import TreatmentOptionsSection from './TreatmentOptionsSection';

export default class SarcomaCoreCancerPilotMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                SarcomaSummarySection,
                TreatmentOptionsSection
            )
        };
    }
}