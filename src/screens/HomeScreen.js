import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const HomeScreen = () => {
  const [isFasting, setIsFasting] = useState(false);
  const [fastStartTime, setFastStartTime] = useState(null);
  
  const startFast = () => {
    const now = new Date();
    setFastStartTime(now);
    setIsFasting(true);
  };
  
  const stopFast = () => {
    setIsFasting(false);
    // You might want to save the completed fast to history here
  };
  
  const formatTime = (date) => {
    if (!date) return '--:--';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>FastWay</Text>
          <Text style={styles.subtitle}>Track your intermittent fasting journey</Text>
        </View>
        
        <View style={styles.fastingCard}>
          <Text style={styles.cardTitle}>
            {isFasting ? 'Current Fast' : 'Start a New Fast'}
          </Text>
          
          {isFasting ? (
            <View style={styles.fastingInfo}>
              <Text style={styles.infoLabel}>Started at:</Text>
              <Text style={styles.infoValue}>{formatTime(fastStartTime)}</Text>
              
              <TouchableOpacity 
                style={[styles.button, styles.stopButton]} 
                onPress={stopFast}
              >
                <Text style={styles.buttonText}>END FAST</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.fastingOptions}>
              <Text style={styles.infoText}>
                Ready to start your fasting period? Click the button below.
              </Text>
              
              <TouchableOpacity 
                style={[styles.button, styles.startButton]} 
                onPress={startFast}
              >
                <Text style={styles.buttonText}>START FAST</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Fasting Benefits</Text>
          <Text style={styles.infoText}>
            • Improved mental clarity{'\n'}
            • Weight management{'\n'}
            • Cellular repair (autophagy){'\n'}
            • Reduced inflammation{'\n'}
            • Better insulin sensitivity
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  fastingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  fastingInfo: {
    alignItems: 'center',
  },
  fastingOptions: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 