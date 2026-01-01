import { useQuery } from "@tanstack/react-query";
import { mockProjects, mockExperience, mockEducation, mockSkills } from "@/data/portfolio-data";

// Projects Hook
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      // Simulate async behavior for consistency
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockProjects;
    },
  });
}

// Experience Hook
export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockExperience;
    },
  });
}

// Education Hook
export function useEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockEducation;
    },
  });
}

// Skills Hook
export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockSkills;
    },
  });
}
