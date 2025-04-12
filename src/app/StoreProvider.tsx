'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { setRecipes } from '@/lib/actions';
import { Recipe } from '@/models/recipes';

export default function StoreProvider({
	recipes,
  	children
}: Readonly<{
	recipes: Recipe[],
  	children: React.ReactNode
}>) {
	const storeRef = useRef<AppStore | null>(null);
	if (!storeRef.current) {
		storeRef.current = makeStore();
		storeRef.current.dispatch(setRecipes(recipes));
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
};