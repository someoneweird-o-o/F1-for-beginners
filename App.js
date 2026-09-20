import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, Text, View, FlatList, TouchableOpacity, 
  SafeAreaView, ScrollView, TextInput, Image, Animated, Easing, Dimensions 
} from 'react-native';
import { DRIVERS, TEAMS, CHAMPIONS, DICTIONARY } from './src/data/f1Data';
import { GlassCard } from './src/components/GlassCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DOCK_PADDING = 12;
const DOCK_INNER_PADDING = 6;
const DOCK_WIDTH = SCREEN_WIDTH - (DOCK_PADDING * 2) - (DOCK_INNER_PADDING * 2);
const TAB_WIDTH = DOCK_WIDTH / 5;

const TABS = [
  { key: 'home', label: 'Home' },
  { key: 'drivers', label: 'Grid' },
  { key: 'teams', label: 'Teams' },
  { key: 'champions', label: 'Champs' },
  { key: 'dictionary', label: 'Dict' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const tabSlideAnim = useRef(new Animated.Value(0)).current;
  const contentFadeAnim = useRef(new Animated.Value(1)).current;
  const contentScaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.25,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleTabChange = (tabKey, index) => {
    if (tabKey === activeTab) return;

    Animated.spring(tabSlideAnim, {
      toValue: index * TAB_WIDTH,
      damping: 18,
      stiffness: 180,
      mass: 0.8,
      useNativeDriver: true,
    }).start();

    Animated.parallel([
      Animated.timing(contentFadeAnim, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(contentScaleAnim, {
        toValue: 0.97,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setActiveTab(tabKey);
      setSelectedDriver(null);
      setSearchQuery('');

      Animated.parallel([
        Animated.timing(contentFadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(contentScaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const filteredDrivers = DRIVERS.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDict = DICTIONARY.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.bgGlowRed, { transform: [{ scale: pulseAnim }] }]} />
      <Animated.View style={[styles.bgGlowBlue, { transform: [{ scale: pulseAnim }] }]} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>F1 FOR BEGINNERS</Text>
      </View>

      <Animated.View style={[
        styles.content, 
        activeTab === 'dictionary' && styles.fullWidthContent,
        { opacity: contentFadeAnim, transform: [{ scale: contentScaleAnim }] }
      ]}>
        {activeTab === 'home' && (
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBottomPadding}>
            <GlassCard style={styles.heroCard} glowColor="rgba(255, 24, 1, 0.2)">
              <Text style={styles.heroBadge}>2026 BEGINNER GUIDE</Text>
              <Text style={styles.heroTitle}>MASTER FORMULA 1</Text>
              <Text style={styles.heroSubtitle}>
                Your full gateway to the 2026 grid. Discover all 22 drivers, 11 teams, past champions, and simple explanations of rules & jargon.
              </Text>
            </GlassCard>

            <View style={styles.statsRow}>
              <GlassCard style={styles.miniStatCard}>
                <Text style={styles.statValue}>22</Text>
                <Text style={styles.statLabel}>Drivers</Text>
              </GlassCard>
              <GlassCard style={styles.miniStatCard}>
                <Text style={styles.statValue}>11</Text>
                <Text style={styles.statLabel}>Teams</Text>
              </GlassCard>
              <GlassCard style={styles.miniStatCard}>
                <Text style={styles.statValue}>76</Text>
                <Text style={styles.statLabel}>Seasons</Text>
              </GlassCard>
            </View>

            <GlassCard onPress={() => handleTabChange('drivers', 1)} glowColor="rgba(255, 24, 1, 0.15)">
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardHeader}>2026 DRIVERS GRID</Text>
                <Text style={styles.arrowIcon}>→</Text>
              </View>
              <Text style={styles.cardSub}>Lewis Hamilton at Ferrari, Lando Norris defending title</Text>
            </GlassCard>

            <GlassCard onPress={() => handleTabChange('teams', 2)} glowColor="rgba(0, 122, 255, 0.15)">
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardHeader}>CONSTRUCTORS & TEAMS</Text>
                <Text style={styles.arrowIcon}>→</Text>
              </View>
              <Text style={styles.cardSub}>Audi, Cadillac, Red Bull Ford & Mercedes power units</Text>
            </GlassCard>

            <GlassCard onPress={() => handleTabChange('champions', 3)} glowColor="rgba(255, 215, 0, 0.15)">
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardHeader}>WORLD CHAMPIONS</Text>
                <Text style={styles.arrowIcon}>→</Text>
              </View>
              <Text style={styles.cardSub}>Complete history of title winners from 1950 to present</Text>
            </GlassCard>

            <GlassCard onPress={() => handleTabChange('dictionary', 4)} glowColor="rgba(175, 82, 222, 0.15)">
              <View style={styles.cardHeaderRow}>
                <Text style={styles.cardHeader}>F1 DICTIONARY</Text>
                <Text style={styles.arrowIcon}>→</Text>
              </View>
              <Text style={styles.cardSub}>Active aero, Overtake Mode, apex, undercut, and key terms</Text>
            </GlassCard>
          </ScrollView>
        )}

        {activeTab === 'drivers' && !selectedDriver && (
          <View style={styles.tabContainer}>
            <TextInput 
              style={styles.searchInput}
              placeholder="Search driver or team..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <FlatList
              data={filteredDrivers}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollBottomPadding}
              renderItem={({ item }) => (
                <GlassCard onPress={() => setSelectedDriver(item)}>
                  <View style={styles.rowCard}>
                    <Image source={{ uri: item.image }} style={styles.driverAvatar} resizeMode="contain" />
                    <View style={styles.driverInfo}>
                      <View style={styles.nameRow}>
                        <Text style={styles.driverName}>{item.name}</Text>
                        <View style={styles.badge}><Text style={styles.badgeText}>#{item.number}</Text></View>
                      </View>
                      <Text style={styles.driverTeam}>{item.team} • {item.country}</Text>
                    </View>
                  </View>
                </GlassCard>
              )}
            />
          </View>
        )}

        {selectedDriver && (
          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBottomPadding}>
            <TouchableOpacity onPress={() => setSelectedDriver(null)} style={styles.backBtn}>
              <Text style={styles.backText}>← Back to Drivers</Text>
            </TouchableOpacity>
            <GlassCard>
              <Image source={{ uri: selectedDriver.image }} style={styles.detailAvatar} resizeMode="contain" />
              <Text style={styles.detailNumber}>#{selectedDriver.number}</Text>
              <Text style={styles.detailName}>{selectedDriver.name}</Text>
              <Text style={styles.detailTeam}>{selectedDriver.team}</Text>
              <View style={styles.divider} />
              <Text style={styles.statsText}>Wins: {selectedDriver.wins}</Text>
              <Text style={styles.statsText}>Podiums: {selectedDriver.pod}</Text>
              <Text style={styles.statsText}>Championships: {selectedDriver.championships}</Text>
              <Text style={styles.bioText}>{selectedDriver.bio}</Text>
            </GlassCard>
          </ScrollView>
        )}

        {activeTab === 'teams' && (
          <FlatList
            data={TEAMS}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollBottomPadding}
            renderItem={({ item }) => (
              <GlassCard>
                <View style={styles.rowCard}>
                  <View style={[styles.teamBadge, { borderColor: item.color, backgroundColor: `${item.color}22` }]}>
                    <Text style={[styles.teamBadgeText, { color: item.color }]}>{item.tag}</Text>
                  </View>
                  <View style={styles.driverInfo}>
                    <Text style={styles.driverName}>{item.name}</Text>
                    <Text style={styles.driverTeam}>Engine: {item.engine}</Text>
                  </View>
                </View>
                <Text style={styles.statsText}>Base: {item.base}</Text>
                <Text style={styles.statsText}>Constructors Titles: {item.titles}</Text>
                <Text style={styles.bioText}>{item.description}</Text>
              </GlassCard>
            )}
          />
        )}

        {activeTab === 'champions' && (
          <FlatList
            data={CHAMPIONS}
            keyExtractor={(item) => item.year}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollBottomPadding}
            renderItem={({ item }) => (
              <GlassCard>
                <View style={styles.rowCard}>
                  <Text style={styles.yearText}>{item.year}</Text>
                  <View>
                    <Text style={styles.driverName}>{item.driver}</Text>
                    <Text style={styles.driverTeam}>{item.team} ({item.wins} wins)</Text>
                  </View>
                </View>
              </GlassCard>
            )}
          />
        )}

        {activeTab === 'dictionary' && (
          <View style={styles.tabContainer}>
            <TextInput 
              style={styles.searchInputFull}
              placeholder="Search F1 terms (e.g. Apex, Boost, Undercut)..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <FlatList
              data={filteredDict}
              keyExtractor={(item) => item.term}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollBottomPadding}
              renderItem={({ item }) => (
                <GlassCard style={styles.wideDictCard}>
                  <View style={styles.dictHeaderRow}>
                    <Text style={styles.dictTermText}>{item.term}</Text>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryBadgeText}>{item.category}</Text>
                    </View>
                  </View>
                  <Text style={styles.dictDefinitionText}>{item.definition}</Text>
                </GlassCard>
              )}
            />
          </View>
        )}
      </Animated.View>

      <View style={styles.dockContainer}>
        <View style={styles.dockGlass}>
          <Animated.View 
            style={[
              styles.slidingActivePill, 
              { transform: [{ translateX: tabSlideAnim }] }
            ]} 
          />

          {TABS.map((tab, idx) => (
            <TouchableOpacity 
              key={tab.key}
              style={styles.dockItem} 
              activeOpacity={0.8}
              onPress={() => handleTabChange(tab.key, idx)}
            >
              <Text style={[styles.dockText, activeTab === tab.key && styles.activeDockText]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07080A', position: 'relative' },
  bgGlowRed: { position: 'absolute', top: -100, left: -80, width: 300, height: 300, borderRadius: 150, backgroundColor: 'rgba(255, 24, 1, 0.25)' },
  bgGlowBlue: { position: 'absolute', bottom: -100, right: -80, width: 300, height: 300, borderRadius: 150, backgroundColor: 'rgba(0, 122, 255, 0.22)' },
  header: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 },
  headerTitle: { color: '#FF1801', fontSize: 22, fontWeight: '900', letterSpacing: 1.5 },
  content: { flex: 1, paddingHorizontal: 12 },
  fullWidthContent: { paddingHorizontal: 6 },
  scrollContainer: { flex: 1 },
  scrollBottomPadding: { paddingBottom: 110 },
  tabContainer: { flex: 1 },
  heroCard: { backgroundColor: 'rgba(255, 24, 1, 0.12)', borderColor: 'rgba(255, 24, 1, 0.3)' },
  heroBadge: { color: '#FF1801', fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 4 },
  heroTitle: { color: '#FFF', fontSize: 26, fontWeight: '900' },
  heroSubtitle: { color: '#DDD', marginTop: 6, lineHeight: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2 },
  miniStatCard: { flex: 0.31, padding: 12, alignItems: 'center' },
  statValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: '#AAA', fontSize: 12, marginTop: 2 },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardHeader: { color: '#FFF', fontSize: 17, fontWeight: 'bold' },
  arrowIcon: { color: '#FF1801', fontSize: 18, fontWeight: 'bold' },
  cardSub: { color: '#AAA', marginTop: 4, fontSize: 13 },
  rowCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  driverAvatar: { width: 56, height: 56, borderRadius: 28, marginRight: 12 },
  detailAvatar: { width: '100%', height: 200, borderRadius: 16, marginBottom: 12 },
  
  teamBadge: {
    width: 54,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  teamBadgeText: { fontSize: 14, fontWeight: '900', letterSpacing: 0.5 },
  
  driverInfo: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  driverName: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  driverTeam: { color: '#AAA', fontSize: 13, marginTop: 2 },
  badge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, backgroundColor: '#FF1801' },
  badgeText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  backBtn: { marginVertical: 12 },
  backText: { color: '#FF1801', fontWeight: 'bold' },
  detailNumber: { fontSize: 48, fontWeight: '900', color: '#FF1801' },
  detailName: { fontSize: 26, fontWeight: 'bold', color: '#FFF' },
  detailTeam: { fontSize: 16, color: '#AAA', marginBottom: 12 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)', marginVertical: 8 },
  statsText: { color: '#FFF', fontSize: 14, marginVertical: 2 },
  bioText: { color: '#DDD', marginTop: 8, lineHeight: 18 },
  yearText: { fontSize: 20, fontWeight: 'bold', color: '#FF1801', width: 60 },
  searchInput: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 14, color: '#FFF', padding: 12, marginVertical: 8, borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)' },
  searchInputFull: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 14, color: '#FFF', padding: 12, marginHorizontal: 6, marginVertical: 8, borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)' },
  
  // Custom Dictionary Styling
  wideDictCard: { marginHorizontal: 4, padding: 14 },
  dictHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  dictTermText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  categoryBadge: { backgroundColor: 'rgba(255, 24, 1, 0.2)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(255, 24, 1, 0.4)' },
  categoryBadgeText: { color: '#FF1801', fontSize: 11, fontWeight: '700' },
  dictDefinitionText: { color: '#DDD', fontSize: 14, lineHeight: 20 },

  dockContainer: {
    position: 'absolute',
    bottom: 20,
    left: DOCK_PADDING,
    right: DOCK_PADDING,
    alignItems: 'center',
  },
  dockGlass: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 26,
    paddingVertical: 6,
    paddingHorizontal: DOCK_INNER_PADDING,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.22)',
    width: '100%',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 15,
  },
  slidingActivePill: {
    position: 'absolute',
    left: DOCK_INNER_PADDING,
    width: TAB_WIDTH,
    height: '100%',
    backgroundColor: '#FF1801',
    borderRadius: 20,
  },
  dockItem: {
    width: TAB_WIDTH,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  dockText: { color: 'rgba(255, 255, 255, 0.65)', fontSize: 13, fontWeight: '600' },
  activeDockText: { color: '#FFF', fontWeight: '800' },
});