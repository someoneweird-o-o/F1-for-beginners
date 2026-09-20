import React, { useRef } from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';

export function GlassCard({ children, style, onPress, glowColor = 'rgba(255, 255, 255, 0.05)' }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 25,
      bounciness: 6,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 25,
      bounciness: 6,
    }).start();
  };

  const CardWrapper = onPress ? TouchableWithoutFeedback : View;

  return (
    <CardWrapper
      onPress={onPress}
      onPressIn={onPress ? handlePressIn : undefined}
      onPressOut={onPress ? handlePressOut : undefined}
    >
      <Animated.View style={[styles.glassCard, style, { transform: [{ scale: scaleAnim }] }]}>
        {/* Soft internal gradient glow instead of harsh lines */}
        <View style={[styles.internalGlow, { backgroundColor: glowColor }]} />
        {children}
      </Animated.View>
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 24,
    padding: 18,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  internalGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    opacity: 0.6,
  },
});