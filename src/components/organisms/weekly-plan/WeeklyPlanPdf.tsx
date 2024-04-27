import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

import { ExercisePlan, MealPlan } from '../../../mocks/dataResponseMock';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',

    backgroundColor: 'rgb(55 65 81)',
    color: 'white',
    padding: '24px',
  },

  footer: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    textAlign: 'center',
    backgroundColor: 'rgb(55 65 81)',
    text: 'white',
    padding: '24px',
  },
});

interface WeeklyPlanPDFProps {
  data: {
    exercisePlan: ExercisePlan;
    mealPlan: { [day: string]: MealPlan };
  };
  userName: string;
}

const WeeklyPlanPDF: React.FC<WeeklyPlanPDFProps> = ({ data, userName }) => {
  const timeStamp = new Date().toLocaleDateString();
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Image
            src='/images/logo/fee-fit-logo.png'
            style={{ width: '150px' }}
          />
          <Text>
            {`${userName}
            's week meal and exercise plan on ${timeStamp}`}
          </Text>
        </View>
        {Object.keys(data.exercisePlan).map((day, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.title}>{day}</Text>
            <Text style={styles.text}>{data.exercisePlan[day]}</Text>
            <Text style={styles.subtitle}>Meal Plan</Text>
            {Object.keys(data.mealPlan[day]).map((meal, mealIndex) => (
              <Text key={mealIndex} style={styles.text}>
                {meal}: {data.mealPlan[day][meal]}
              </Text>
            ))}
          </View>
        ))}
        <Text>App developed by danipereira.dev</Text>
      </Page>
    </Document>
  );
};

export default WeeklyPlanPDF;
