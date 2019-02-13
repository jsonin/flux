import { getNamespaceAndName } from '../json-helper';
import FluxBreastCancerGeneticAnalysisPanel from './FluxBreastCancerGeneticAnalysisPanel';
import FluxBRCA1Variant from './FluxBRCA1Variant';
import FluxBRCA2Variant from './FluxBRCA2Variant';
import FluxEstrogenReceptorStatus from './FluxEstrogenReceptorStatus';
import FluxHER2ReceptorStatus from './FluxHER2ReceptorStatus';
import FluxProgesteroneReceptorStatus from './FluxProgesteroneReceptorStatus';
import FluxTNMStage from './FluxTNMStage';
import FluxMitoticRate from './FluxMitoticRate';
import FluxGastrointestinalStromalTumor from './FluxGastrointestinalStromalTumor';
import FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel from './FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel';
import FluxKITVariant from './FluxKITVariant';
import FluxPDGFRAVariant from './FluxPDGFRAVariant';

export default class FluxOncologyObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.oncology') {
            throw new Error(`Unsupported type in ShrOncologyObjectFactory: ${type}`);
        }

        // returns Flux wrapper class if found, otherwise use ShrOncologyObjectFactory
        switch (elementName) {
            case 'BRCA1Variant': return new FluxBRCA1Variant(json);
            case 'BRCA2Variant': return new FluxBRCA2Variant(json);
            case 'BreastCancerGeneticAnalysisPanel': return new FluxBreastCancerGeneticAnalysisPanel(json, patientRecord);
            case 'EstrogenReceptorStatus': return new FluxEstrogenReceptorStatus(json);
            case 'ProgesteroneReceptorStatus': return new FluxProgesteroneReceptorStatus(json);
            case 'HER2ReceptorStatus': return new FluxHER2ReceptorStatus(json);
            case 'TNMStage': return new FluxTNMStage(json);
            case 'GastrointestinalStromalTumor': return new FluxGastrointestinalStromalTumor(json, patientRecord);
            case 'GastrointestinalStromalTumorCancerGeneticAnalysisPanel': return new FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel(json, patientRecord);
            case 'KITVariant': return new FluxKITVariant(json, patientRecord);
            case 'PDGFRAVariant': return new FluxPDGFRAVariant(json, patientRecord);
            case 'MitoticRate': return new FluxMitoticRate(json, patientRecord);
            default: console.error("unknown Flux wrapper in oncology package: " + elementName);
        }
    }
}