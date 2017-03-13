export interface ViewModel {
  metadata: any;
  type?: string;
  name?: string;
  width?: number; 
  direction?: string;
  items?: ViewModel[];
}
