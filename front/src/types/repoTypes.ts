export type SearchRepoDto = {
  full_name: string;
  name:string;
  url:string;
  description: string;
  id:number;
  (key:string):any;
}
export type SearchRepoResponse = {
  incomplete_results:boolean;
  total_count:number;
  items:SearchRepoDto;
}
