import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  simpleTailwindcss,
  simpleAngular,
  simpleReact,
  simpleNodedotjs,
  simpleFlutter,
  simpleNextdotjs,
  simpleRedux,
  simpleAndroid,
} from '@ng-icons/simple-icons';

import { ResumeContentComponent } from './resume-content/resume-content.component';
import { ContentCardComponent } from './content-card/content-card.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    NgClass,
    ResumeContentComponent,
    ContentCardComponent,
    NgIconComponent,
  ],
  providers: [
    provideIcons({
      simpleTailwindcss,
      simpleAngular,
      simpleReact,
      simpleNodedotjs,
      simpleFlutter,
      simpleNextdotjs,
      simpleRedux,
      simpleAndroid,
    }),
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  activeMenu = signal(0);

  resumeMenus: ResumeMenu[] = [
    { id: 0, name: 'Experience' },
    { id: 1, name: 'Education' },
    { id: 2, name: 'Skills' },
  ];

  skills: Skill[] = [
    { name: 'React', icon: 'simpleReact' },
    { name: 'Next.js', icon: 'simpleNextdotjs' },
    { name: 'Angular', icon: 'simpleAngular' },
    { name: 'Redux', icon: 'simpleRedux' },
    { name: 'Javascript', icon: 'simpleNodedotjs' },
    { name: 'TailwindCSS', icon: 'simpleTailwindcss' },
    { name: 'Android', icon: 'simpleAndroid' },
    { name: 'Flutter', icon: 'simpleFlutter' },
  ];

  educationData: ResumeData[] = [
    {
      title: 'Fullstack Developer',
      company: 'Arkademy (Pijar Camp)',
      startDate: '2019',
      endDate: '2019',
    },
    {
      title: 'Teknik Komputer & Jaringan',
      company: 'SMK Negeri 2 Bogor',
      startDate: '2016',
      endDate: '2019',
    },
  ];

  experienceData: ResumeData[] = [
    {
      title: 'Frontend Developer',
      company: 'PT XL Axiata Tbk.',
      startDate: 'Oct 2023',
      endDate: 'Present',
    },
    {
      title: 'Frontend Developer (Angular)',
      company: 'Axiata Digital Labs',
      startDate: 'Aug 2021',
      endDate: 'Aug 2023',
    },
    {
      title: 'Mobile Developer',
      company: 'Axiata Digital Labs',
      startDate: 'Sep 2019',
      endDate: 'Aug 2021',
    },
    {
      title: 'Frontend Developer',
      company: 'Meteor Inovasi Digital',
      startDate: 'Aug 2019',
      endDate: 'Present',
    },
    {
      title: 'Computer Technician',
      company: 'AB Computer',
      startDate: 'Oct 2017',
      endDate: 'Jan 2018',
    },
  ];
}
