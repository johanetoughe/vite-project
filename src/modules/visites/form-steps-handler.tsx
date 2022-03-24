import FicheVisiteForm from "./FicheVisiteForm"
import VisitorCreateForm from "./VisitorCreateForm"
import ConfirmationVisiteForm from './ConfirmationVisiteForm';

export const handleSteps = (step: number) => {
    switch (step) {
      case 0:
        return <VisitorCreateForm />
      case 1:
        return <FicheVisiteForm/>
      case 2:
        return <ConfirmationVisiteForm />
      default:
        throw new Error('Unknown step')
    }
  }