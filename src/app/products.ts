export enum Category {
  All = 0,
  HighResolution = 1,
  SmallDisplay = 2,
  HighQuality = 3,
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: Category;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 1,
    category: Category.HighResolution,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock: 1,
    category: Category.SmallDisplay,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    stock: 1,
    category: Category.All,
  },
  {
    id: 4,
    name: 'Tablet',
    price: 900,
    description: '',
    stock: 0,
    category: Category.HighResolution,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
