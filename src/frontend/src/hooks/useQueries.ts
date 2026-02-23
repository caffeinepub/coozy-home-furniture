import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type Category, type Product, type Testimonial } from '../backend';

export function useFeaturedProducts() {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['featured-products'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFeaturedProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProductsByCategory(category: Category) {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products', category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTestimonials() {
  const { actor, isFetching } = useActor();

  return useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNewsletterSubscription() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.subscribeToNewsletter(email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletter'] });
    },
  });
}
