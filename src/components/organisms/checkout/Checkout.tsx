import { useState, useEffect } from 'react';
import FetchOpenAi from '../../FetchData';
/* import { openAiMock } from '../../../mocks/dataResponseMock'; */

import WeeklyPlanPDF from '../../CreatePdf';
import { PDFViewer } from '@react-pdf/renderer';

const Plan = () => {
  const [planData, setPlanData] = useState<{
    exercisePlan: string;
    mealPlan: string;
  } | null>(null);
  const { data, loading, error } = FetchOpenAi();

  useEffect(() => {
    if (data) {
      setPlanData(data);
    }
  }, [data]);

  console.log(data);

  return loading ? (
    <div className='loader'></div>
  ) : planData ? (
    <PDFViewer width='100%' height='600' style={{ zIndex: '20' }}>
      <WeeklyPlanPDF data={planData} />
    </PDFViewer>
  ) : (
    <h1>{error && error}</h1>
  );
};

export default Plan;
