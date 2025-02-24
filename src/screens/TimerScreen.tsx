import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TimerScreen: React.FC = () => {
  const [isFasting, setIsFasting] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const toggleFast = () => {
    if (!isFasting) {
      setStartTime(new Date());
    }
    setIsFasting(!isFasting);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isFasting ? 'Fasting in Progress' : 'Start Your Fast'}
      </Text>
      {isFasting && startTime && (
        <Text style={styles.time}>
          Started at: {startTime.toLocaleTimeString()}
        </Text>
      )}
      <Button
        title={isFasting ? 'End Fast' : 'Start Fast'}
        onPress={toggleFast}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  time: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default TimerScreen; 