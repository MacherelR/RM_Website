import { InfoField } from '../../models/infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('Internship at EFD Induction', 'EFD-Induction', 'Aug. 2016 - Dec. 2016', 'https://www.efd-induction.com/de-de'),
    new InfoField('Local brewery brewer software refactoring', 'EMF/Freiburger Biermanufaktur', 'Jan. 2017 - Jun. 2017', 'https://www.freiburger-biermanufaktur.ch/fr'),
    new InfoField('Industrial Software Developper', 'HEIG-VD iAi', 'Sept. 2021 - Present', 'http://iai.heig-vd.ch/')
  ];

  private education: InfoField[] = [
    new InfoField(
      'Master\'s degree in Computer Sciences',
      'HES-SO Master',
      'Sept. 2021 - Now',
      'https://www.hes-so.ch/domaines/ia/mse/cs'
    ),
    new InfoField(
      'Electronic and Automation Bachelor degree',
      'HEIG-VD',
      'Sept. 2018 - Sept 2021',
      'https://heig-vd.ch/'
    ),
    new InfoField(
      'CFC Automation',
      'EMF-Fribourg',
      'Aug 2013 - Aug 2016',
      'https://www.fr.ch/emf'
    )
  ];

  private languages: InfoField[] = [
    new InfoField('French', 'Native competence', ' ', ' '),
    new InfoField('German', 'B2 (Internship in Germany)', ' ', ' '),
    new InfoField('English', 'Cambridge Advanced Exam (C1)', ' ', ' ')
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

  getLanguages(): InfoField[] {
    return this.languages;
  }
}
