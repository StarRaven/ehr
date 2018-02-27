import {Injectable} from '@angular/core';

import {QuestionBase} from './question-base';
import {CheckboxQuestion} from './question-checkbox';
import {DropdownQuestion} from './question-dropdown';
import {TableQuestion} from './question-table';
import {TextboxQuestion} from './question-textbox';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  questions: QuestionBase<any>[];

  getQuestions() {
    //let questions: QuestionBase<any>[] = [
    this.questions = [
      new TextboxQuestion({
        key: '1',
        label: 'VGM Account Number',
        value: '0000001111',
        required: true,
        order: 1,
        group: 1,
        layout: 'half'
      }),

      new TextboxQuestion({
        key: '2',
        label: 'ATP RESNA Number',
        value: '0000000001',
        required: true,
        order: 2,
        group: 1,
        layout: 'half'
      }),

      new TextboxQuestion({
        key: '3',
        label: 'Completed By',
        value: 'John',
        required: true,
        order: 3,
        group: 1,
        layout: 'full'
      }),

      new TextboxQuestion({
        key: '15',
        label: 'Date of Initial Evaluation',
        value: '01/11/2018',
        required: true,
        order: 15,
        group: 1,
        layout: 'half'
      }),

      new TextboxQuestion({
        key: '16',
        label: 'Date FMA Completed',
        value: '02/12/2018',
        required: true,
        order: 16,
        group: 1,
        layout: 'half'
      }),

      new CheckboxQuestion({
        key: '17a',
        label: 'Is this a Homelink Order?',
        value: '0',
        options: [{key: '0', value: 'Yes'}, {key: '1', value: 'No'}],
        order: 17.1,
        group: 1,
        layout: '1row'
      }),

      new TextboxQuestion({
        key: '17b',
        label: 'If yes, what is the Homelink Order #?',
        value: '123',
        required: true,
        order: 17.2,
        group: 1,
        layout: 'full subq'
      }),

      new CheckboxQuestion({
        key: '18',
        label: 'PRIMARY DIAGNOSIS',
        value: '10',
        options: [
          {key: '0', value: 'Cerebral Palsy'},
          {key: '1', value: 'SCI (Paraplegia)'},
          {key: '2', value: 'SCI (Tetraplegia/Quadriplegia)'},
          {key: '3', value: 'Multiple Sclerosis'},
          {key: '4', value: 'Stroke/CVA'},
          {key: '5', value: 'Cardiopulmonary Disease'},
          {key: '6', value: 'Osteoarthritis'},
          {
            key: '7',
            value:
                'Amyotrophic Lateral Sclerosis/Primary Lateral Sclerosis	'
          },
          {key: '8', value: 'Traumatic Brain Injury (TBI)'},
          {key: '9', value: 'Amputation'},
          {key: '10', value: 'Muscular Dystrophy'},
          {key: '11', value: 'Spina Bifida'},
          {key: '12', value: 'Parkinson Disease'},
          {key: '13', value: 'Rheumatoid Arthritis'},
          {key: '14', value: 'Spinal Stenosis'},
          {key: '15', value: 'Huntington Disease'},
          {key: '16', value: 'Post-Polio Syndrome'},
          {key: '17', value: 'Osteogenesis Imperfecta'},
          {key: '18', value: 'Spinocerebellar Disease'},
          {key: '19', value: 'Morbid Obesity'},
          {key: '20', value: 'Cerebellar Degeneration'},
          {key: '21', value: 'Arthrogryposis'},
          {key: '22', value: 'Other Neuromuscular or Congenital Disease (Not Listed Above)'},
        ],
        order: 18,
        group: 2,
        layout: '2column'
      }),

      new TextboxQuestion({
        key: '19',
        label: 'YEAR OF ONSET',
        value: '2017',
        required: true,
        order: 19,
        group: 2,
        layout: 'full'
      }),

      new CheckboxQuestion({
        key: '20',
        label: 'DOES THE PERSON CURRENTLY HAVE SEATING-RELATED SKIN BREAKDOWN?',
        value: '2',
        options: [
          {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
          {key: '2', value: 'Unsure'}
        ],
        order: 20,
        group: 3,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '21',
        label: 'DOES THE PERSON HAVE HEALED SEATING-RELATED SKIN BREAKDOWN?',
        value: '1',
        options: [
          {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
          {key: '2', value: 'Unsure'}
        ],
        order: 21,
        group: 3,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '22a',
        label: 'HAS THE PERSON BEEN ADMITTED TO A HEALTHCARE FACILITY IN THE LAST 3 MONTHS? (I.E. IN-PATIENT, NURSING, OR REHABILITATION FACILITY)',
        value: '0',
        options: [
          {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
          {key: '2', value: 'Unsure'}
        ],
        order: 22.1,
        group: 3,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '22b',
        label: 'IF YES, WAS THE ENCOUNTER A RESULT OF A SEATING AND MOBILITY INCIDENT, SUCH AS A FALL OR SKIN BREAKDOWN?',
        value: '1',
        options: [
          {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
          {key: '2', value: 'Unsure'}
        ],
        order: 22.2,
        group: 3,
        layout: '2row subq'
      }),

      new CheckboxQuestion({
        key: '23',
        label: 'HOW MANY TIMES HAS THE PERSON FALLEN IN THE LAST 3 MONTHS?',
        value: '2',
        options: [
          {key: '0', value: 'None'}, {key: '1', value: '1-2 times'},
          {key: '2', value: '3-4 times'}, {key: '3', value: '5 or more times'},
          {key: '4', value: 'Unknown'}
        ],
        order: 23,
        group: 4,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '24',
        label: 'HOW MANY HOURS A DAY DOES THE PERSON REPORT THEY USE THE DEVICE IN THE LAST 3 MONTHS?',
        value: '1',
        options: [
          {key: '0', value: '1 or Less'}, {key: '1', value: '2-4 Hours'},
          {key: '2', value: '5-8 Hours'}, {key: '3', value: '9-12 Hours'},
          {key: '4', value: '13+ Hours'}
        ],
        order: 24,
        group: 4,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '25',
        label: 'HOW MANY TIMES A WEEK DOES THE PERSON REPORT THEY LEAVE THEIR HOME (NOT INCLUDING OUTINGS FOR MEDICAL APPOINTMENTS)?',
        value: '3',
        options: [
          {key: '0', value: '1 or Less'}, {key: '1', value: '2-4 Hours'},
          {key: '2', value: '5-8 Hours'}, {key: '3', value: '9-12 Hours'},
          {key: '4', value: '13+ Hours'}
        ],
        order: 25,
        group: 4,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '26',
        label: 'EMPLOYMENT:',
        value: '0',
        options: [
          {key: '0', value: 'Employed'}, {key: '1', value: 'Not Working'},
          {key: '2', value: 'Retired'}
        ],
        order: 26,
        group: 4,
        layout: 'half'
      }),

      new CheckboxQuestion({
        key: '27',
        label: 'LIVING SITUATION:',
        value: '1',
        options: [
          {key: '0', value: 'Community – (i.e. home, apartment, condo)'}, {key: '1', value: 'Assisted – (i.e. group home, assisted living)'},
          {key: '2', value: 'Skilled – (i.e. hospital, SNF, institution)'}
        ],
        order: 27,
        group: 4,
        layout: 'half'
      }),

      new CheckboxQuestion({
        key: '28',
        label: 'CURRENT MEANS OF TRANSPORTATION:',
        value: '3',
        options: [
          {key: '0', value: 'Accessible personal vehicle'}, {key: '1', value: 'Inaccessible personal vehicle'},
          {key: '2', value: 'Accessible public transportation (i.e ACCESS, Paratransit)'}, {key: '3', value: 'Accessible vehicle for hire (i.e. taxi, rental, delivery service)'},
        ],
        order: 28,
        group: 4,
        layout: '2column'
      }),

      new CheckboxQuestion({
        key: '29',
        label: 'CURRENT FUNDING:',
        value: '7',
        options: [
          {key: '0', value: 'Medicare'},
          {key: '1', value: 'Medicare Managed Care'},
          {key: '2', value: 'Medicaid'},
          {key: '3', value: 'Medicaid Managed Care'},
          {key: '4', value: 'Vocational Rehab'},
          {key: '5', value: 'Private Insurance - Fee for Service'},
          {key: '6', value: 'Private Insurance – HMO'},
          {key: '7', value: 'Worker’s Comp'},
          {key: '8', value: 'VA'},
          {key: '9', value: 'Private Pay'},
          {key: '10', value: 'Other/Not Listed'}
        ],
        order: 29,
        group: 5,
        layout: '2column'
      }),

      new CheckboxQuestion({
        key: '30',
        label: 'HAS THE PERSON’S DEVICE REQUIRED REPAIR SERVICE (I.E. IT STOPPED WORKING NEEDING SERVICE FROM THE SUPPLIER) BUT NOT INCLUDING ROUTINE MAINTENANCE (IE: BATTERY, TIRES, ARMPADS) IN THE LAST 3 MONTHS?',
        value: '2',
        options: [
          {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
          {key: '2', value: 'Unsure'}
        ],
        order: 30,
        group: 6,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '31',
        label: 'HAS THE PERSON’S DEVICE BEEN SERVICED FOR MAINTENANCE IN THE LAST 3 MONTHS (I.E. BATTERY, TIRES, ARMPADS)',
        value: '0',
        options: [
          {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
          {key: '2', value: 'Unsure'}
        ],
        order: 31,
        group: 6,
        layout: '2row'
      }),

      new CheckboxQuestion({
        key: '32',
        label: 'PRIMARY DIAGNOSIS',
        value: '12',
        options: [
          {key: '0', value: 'Cerebral Palsy'},
          {key: '1', value: 'SCI (Paraplegia)'},
          {key: '2', value: 'SCI (Tetraplegia/Quadriplegia)'},
          {key: '3', value: 'Multiple Sclerosis'},
          {key: '4', value: 'Stroke/CVA'},
          {key: '5', value: 'Cardiopulmonary Disease'},
          {key: '6', value: 'Osteoarthritis'},
          {
            key: '7',
            value:
                'Amyotrophic Lateral Sclerosis/Primary Lateral Sclerosis	'
          },
          {key: '8', value: 'Traumatic Brain Injury (TBI)'},
          {key: '9', value: 'Amputation'},
          {key: '10', value: 'Muscular Dystrophy'},
          {key: '11', value: 'Spina Bifida'},
          {key: '12', value: 'Parkinson Disease'},
          {key: '13', value: 'Rheumatoid Arthritis'},
          {key: '14', value: 'Spinal Stenosis'},
          {key: '15', value: 'Huntington Disease'},
          {key: '16', value: 'Post-Polio Syndrome'},
          {key: '17', value: 'Osteogenesis Imperfecta'},
          {key: '18', value: 'Spinocerebellar Disease'},
          {key: '19', value: 'Morbid Obesity'},
          {key: '20', value: 'Cerebellar Degeneration'},
          {key: '21', value: 'Arthrogryposis'},
          {key: '22', value: 'Other Neuromuscular or Congenital Disease (Not Listed Above)'},
        ],
        order: 32,
        group: 6,
        layout: '2column'
      }),
      /*
            new DropdownQuestion({
              key: 'brave',
              label: 'Bravery Rating',
              options: [
                {key: 'solid', value: 'Solid'}, {key: 'great', value: 'Great'},
                {key: 'good', value: 'Good'}, {key: 'unproven', value:
         'Unproven'}
              ],
              order: 3
            }),

            new TextboxQuestion(
                {key: 'emailAddress', label: 'Email', type: 'email', order:
         2})*/
      new TableQuestion({
        key: '',
        label: 'What is your current means of mobility device?',
        desc: '(Check all that apply)',
        value: '5',
        comments: 'What is your current means of mobility device?',
        options: [
          {key: '0', value: 'Walking'}, {key: '1', value: 'Walker'},
          {key: '2', value: 'Cane'}, {key: '3', value: 'Crutch'},
          {key: '4', value: 'Manual Wheelchair'}, {key: '5', value: 'Power Wheelchair'},
          {key: '6', value: 'Scooter'}, {key: '7', value: 'Prosthetic'},
          {key: '8', value: 'Orthotic'}
        ],
        order: 100,
        group: 30,
        layout: '1column'
      }),

      new TableQuestion({
        key: '1',
        label: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible:',
        desc: '(e.g., tasks I want to do, need to do, am required to do- when and where needed)',
        value: '3',
        comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
        options: [
          {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
          {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
          {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
          {key: '6', value: 'Does not apply'},
        ],
        order: 101,
        group: 30,
        layout: '7column'
      }),
    ];

    //return questions.sort((a, b) => a.order - b.order);
    return this.questions.sort((a, b) => a.order - b.order);
  }
}
