import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillCategory } from '../../models/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  @Input() skillsGrouped: SkillCategory[] | null = null;
}
