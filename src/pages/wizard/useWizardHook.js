import { useState } from 'react';

function useWizardHook() {
  const [wizardData, setWizardData] = useState({
    workshop: '',
    network: '',
    typeOfContact: '',
  });
  return [wizardData, setWizardData];
}
export default useWizardHook;
