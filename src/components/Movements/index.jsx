import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MotiView, AnimatePresence, MotiText } from 'moti';

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setShowValue(!showValue)}
      style={styles.container}
    >
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={data.type === 1 ? styles.value : styles.expenses}
              from={{ translateX: 100 }}
              animate={{ translateX: -0 }}
              transition={{ type: 'spring', duration: 500 }} // tempo em ms
            >
              {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing' }} // tempo em ms
            />
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Movements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margintop: 2,
    marginBottom: 8,
  },
  date: { color: '#DADADA', fontWeight: 'bold' },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  expenses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 8,
  },
});
