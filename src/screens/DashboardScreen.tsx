import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DashboardScreen() {
  const stats = { activeCrew: 24, pendingReports: 5, safetyAlerts: 2 };

  const QuickAction = ({ icon, title, color }) => (
    <TouchableOpacity className="flex-1 items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 mx-1">
      <Ionicons name={icon} size={32} color={color} />
      <Text className="text-sm font-medium text-gray-700 mt-2 text-center">{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <View className="bg-blue-800 rounded-lg p-6 mb-6">
          <Text className="text-white text-2xl font-bold">Welcome back!</Text>
          <Text className="text-white text-lg opacity-90">CLI Inspector</Text>
        </View>
        <View className="flex-row justify-between mb-6">
          <View className="flex-1 bg-white rounded-lg p-4 mr-2 shadow-sm"><Text className="text-3xl font-bold text-green-600 text-center">{stats.activeCrew}</Text><Text className="text-gray-600 text-center">Active Crew</Text></View>
          <View className="flex-1 bg-white rounded-lg p-4 mx-2 shadow-sm"><Text className="text-3xl font-bold text-yellow-600 text-center">{stats.pendingReports}</Text><Text className="text-gray-600 text-center">Pending Reports</Text></View>
          <View className="flex-1 bg-white rounded-lg p-4 ml-2 shadow-sm"><Text className="text-3xl font-bold text-red-600 text-center">{stats.safetyAlerts}</Text><Text className="text-gray-600 text-center">Safety Alerts</Text></View>
        </View>
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-4">Quick Actions</Text>
          <View className="flex-row space-x-3">
            <QuickAction icon="document-text" title="New Record" color="#1B365D" />
            <QuickAction icon="people" title="View Crew" color="#1B365D" />
            <QuickAction icon="shield-checkmark" title="Safety" color="#F97316" />
          </View>
        </View>
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">Recent Activity</Text>
          {[1,2,3].map((item) => (
            <View key={item} className="flex-row items-center border-b border-gray-100 pb-3 mb-3">
              <View className="bg-blue-100 rounded-full p-2 mr-3"><Ionicons name="time" size={16} color="#1B365D" /></View>
              <View className="flex-1"><Text className="font-medium text-gray-800">Footplate Record Updated</Text><Text className="text-gray-500 text-sm">2 hours ago</Text></View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
