export interface ExperienceModel {
  id: number;
  company: string;
  job_title: string;
  start_date: string;
  end_date: string | null; // ✅ pode ser null se for emprego atual
  current_job: boolean;
  description: string[];
  schema_type: string;
}
