export interface IData {
  categories: Category[];
  provinces: string[];
  priceRange: string[];
  merchants: Merchant[];
}

export interface Category {
  name: string;
  subcategories: string[];
}

export interface Merchant {
  shopNameTH: string;
  categoryName: string;
  subcategoryName: string;
  coverImageId: string;
  facilities: string[];
  priceLevel: number;
  isOpen: string;
  highlightText: string;
  recommendedItems: string[];
  addressProvinceName: string;
  addressDistrictName: string;
}
