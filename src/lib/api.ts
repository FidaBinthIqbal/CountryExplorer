import { Country } from "@/types/country";


const BASE_URL = "https://restcountries.com/v3.1";


export async function getCountries(): Promise<Country[]> {
 const res = await fetch(
   `${BASE_URL}/all?fields=name,flags,region,population,capital,cca3`,
   { cache: "no-store" }
 );


 if (!res.ok) {
throw new Error("Failed to fetch countries");
 }


 return res.json();
}


export async function getCountryByCode(code: string): Promise<Country> {
 if (!code) {
   throw new Error("Country code is missing");
 }


 const res = await fetch(
   `${BASE_URL}/alpha/${code}?fields=name,flags,region,population,capital,cca3`,
   { cache: "no-store" }
 );


 if (!res.ok) {
   throw new Error("Failed to fetch country");
 }


 const data = await res.json();
 return Array.isArray(data) ? data[0] : data;
}
