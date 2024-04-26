/* eslint-disable @typescript-eslint/no-unused-vars */
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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
});

const WeeklyPlanPDF = ({ data }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
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
      </Page>
    </Document>
  );
};

export default WeeklyPlanPDF;
