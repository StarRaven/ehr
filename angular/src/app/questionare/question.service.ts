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
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: '1',
        label: 'VGM Account Number',
        value: '',
        required: true,
        order: 1,
        group: 1,
        layout: 'half'
      }),

      new TextboxQuestion({
        key: '2',
        label: 'ATP RESNA Number',
        value: '',
        required: true,
        order: 2,
        group: 1,
        layout: 'half'
      }),

      new TextboxQuestion({
        key: '3',
        label: 'Completed By',
        value: '',
        required: true,
        order: 3,
        group: 1,
        layout: 'full'
      }),

      new TextboxQuestion({
        key: '15',
        label: 'Date of Initial Evaluation',
        value: '',
        required: true,
        order: 15,
        group: 1,
        layout: 'half'
      }),

      new TextboxQuestion({
        key: '16',
        label: 'Date FMA Completed',
        value: '',
        required: true,
        order: 16,
        group: 1,
        layout: 'half'
      }),

      new CheckboxQuestion({
        key: '17a',
        label: 'Is this a Homelink Order?',
        options: [{key: '0', value: 'Yes'}, {key: '1', value: 'No'}],
        order: 17.1,
        group: 2,
        layout: '1row'
      }),

      new CheckboxQuestion({
        key: '18',
        label: 'PRIMARY DIAGNOSIS',
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
        ],
        order: 18,
        group: 2,
        layout: '2column'
      }),

      new TextboxQuestion({
        key: '19',
        label: 'YEAR OF ONSET',
        value: '',
        required: true,
        order: 19,
        group: 2,
        layout: 'full'
      }),

      new CheckboxQuestion({
        key: '20',
        label: 'DOES THE PERSON CURRENTLY HAVE SEATING-RELATED SKIN BREAKDOWN?',
        options: [
          {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
          {key: '2', value: 'Unsure'}
        ],
        order: 20,
        group: 2,
        layout: '2row'
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
        comments: '',
        options: [
          {key: '0', value: 'Walking'}, {key: '1', value: 'Walker'},
          {key: '2', value: 'Cane'}, {key: '3', value: 'Crutch'},
          {key: '4', value: 'Manual Wheelchair'}, {key: '5', value: 'Power Wheelchair'},
          {key: '6', value: 'Scooter'}, {key: '7', value: 'Prosthetic'},
          {key: '8', value: 'Orthotic'}
        ],
        order: 100,
        group: 3,
        layout: '1column'
      }),

      new TableQuestion({
        key: '1',
        label: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible:',
        desc: '(e.g., tasks I want to do, need to do, am required to do- when and where needed)',
        comments: '',
        options: [
          {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
          {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
          {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
          {key: '6', value: 'Does not apply'},
        ],
        order: 101,
        group: 3,
        layout: '7column'
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
