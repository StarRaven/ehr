import {Injectable} from '@angular/core';

import {QuestionBase} from './question-base';
import {CheckboxQuestion} from './question-checkbox';
import {DropdownQuestion} from './question-dropdown';
import {TableQuestion} from './question-table';
import {TextboxQuestion} from './question-textbox';
import {Title} from './question-title';
import {SimpleTableQuestion} from './question-simpletable';
import {ComplexTableQuestion} from './question-complextable';
import {ListQuestion} from './question-list';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous

  getQuestions(id: number) {
    if (id === 1) {
      const questions: QuestionBase<any>[] = [
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

        new TableQuestion({
          key: '2',
          label: 'My current means of mobility meets my comfort needs:',
          desc: '(e.g., heat/moisture, sitting tolerance, pain, stability)',
          value: '4',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 102,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '3',
          label: 'My current means of mobility meets my health needs:',
          desc: '(e.g., pressure sores, breathing, edema control, medical equipment)',
          value: '0',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 103,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '4',
          label: 'My current means of mobility allows me to operate it as independently, safely and efficiently as possible:',
          desc: ' (e.g., do what I want it to do when and where I want to do it)',
          value: '6',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 104,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '5',
          label: 'My current means of mobility allows me to reach and carry out tasks at different surface heights as independently, safely and efficiently as possible:',
          desc: ' (e.g., table, counters, floors, shelves)',
          value: '3',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 105,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '6',
          label: 'My current means of mobility allows me to transfer from one surface to another:',
          desc: '(e.g., bed, toilet, chair)',
          value: '1',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 106,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '7',
          label: 'My current means of mobility allows me to carry out personal care tasks:',
          desc: '(e.g., dressing, bowel/bladder care, eating, hygiene)',
          value: '3',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 107,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '8',
          label: 'My current means of mobility allows me to get around indoors:',
          desc: '(e.g., home, work, mall, restaurants, ramps, obstacles)',
          value: '1',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 108,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '9',
          label: 'My current means of mobility allows me to get around outdoors:',
          desc: '(e.g., uneven surfaces, dirt, grass, gravel, ramps, obstacles)',
          value: '3',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 109,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '10',
          label: 'My current means of mobility allows me to use personal or public transportation as independently, safely and efficiently as possible:',
          desc: '(e.g., secure, stow, ride)',
          value: '6',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 110,
          group: 30,
          layout: '7column'
        }),
        
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 2) {
      const questions: QuestionBase<any>[] = [
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

        new CheckboxQuestion({
          key: '38a',
          label: 'Current status of client?',
          value: '0',
          options: [{key: '0', value: 'Active'}, {key: '1', value: 'Not-Active'}],
          order: 38.1,
          group: 1,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '38b',
          label: 'If not-active, what is the reason they are no longer being followed?',
          value: '0',
          options: [
            {key: '0', value: 'Deceased'},
            {key: '1', value: 'Change in status (i.e. no longer appropriate for recommended device)'},
            {key: '2', value: 'Funding issues'},
            {key: '3', value: 'Unable to contact client (i.e. contact information changed)'},
            {key: '4', value: 'Environmental/Accessibility Issue'}],
          order: 38.2,
          group: 1,
          layout: '1column subq'
        }),

        new TextboxQuestion({
          key: '39',
          label: 'Date of Delivery',
          value: '01/12/2018',
          required: true,
          order: 39,
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '40',
          label: 'Date Follow-Up FMA Completed',
          value: '02/22/2018',
          required: true,
          order: 40,
          group: 1,
          layout: 'half'
        }),

        new CheckboxQuestion({
          key: '41',
          label: 'If not-active, what is the reason they are no longer being followed?',
          value: '3',
          options: [
            {key: '0', value: '21 Day Post Delivery'},
            {key: '1', value: '90 Days'},
            {key: '2', value: '6 Months'},
            {key: '3', value: '12 Months'},
            {key: '4', value: 'Annual'}],
          order: 41,
          group: 1,
          layout: '2column'
        }),

        new TextboxQuestion({
          key: '42',
          label: 'Follow-Up Loaded into Database',
          value: '03/22/2018',
          required: true,
          order: 42,
          group: 1,
          layout: 'half'
        }),

        new CheckboxQuestion({
          key: '20',
          label: 'DOES THE PERSON CURRENTLY HAVE SEATING-RELATED SKIN BREAKDOWN?',
          value: '2',
          options: [
            {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
            {key: '2', value: 'Unsure'}
          ],
          order: 42 + 20,
          group: 2,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '21',
          label: 'DOES THE PERSON HAVE HEALED SEATING-RELATED SKIN BREAKDOWN?',
          value: '2',
          options: [
            {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
            {key: '2', value: 'Unsure'}
          ],
          order: 42 + 21,
          group: 2,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '22a',
          label: 'HAS THE PERSON BEEN ADMITTED TO A HEALTHCARE FACILITY SINCE THE LAST FOLLOW-UP? (I.E. IN-PATIENT, NURSING, OR REHABILITATION FACILITY)',
          value: '1',
          options: [
            {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
            {key: '2', value: 'Unsure'}
          ],
          order: 42 + 22.1,
          group: 2,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '22b',
          label: 'IF YES, WAS THE ENCOUNTER A RESULT OF A SEATING AND MOBILITY INCIDENT, SUCH AS A FALL OR PRESSURE SORE?',
          value: '2',
          options: [
            {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
            {key: '2', value: 'Unsure'}
          ],
          order: 42 + 22.2,
          group: 2,
          layout: '2row subq'
        }),

        new CheckboxQuestion({
          key: '23',
          label: 'HOW MANY TIMES HAS THE PERSON FALLEN SINCE THE LAST FOLLOW-UP?',
          value: '3',
          options: [
            {key: '0', value: 'None'}, {key: '1', value: '1-2 times'},
            {key: '2', value: '3-4 times'}, {key: '3', value: '5 or more times'},
            {key: '4', value: 'Unknown'}
          ],
          order: 42 + 23,
          group: 3,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '24',
          label: 'HOW MANY HOURS PER DAY DOES THE PERSON REPORT THEY USE THE DEVICE?',
          value: '4',
          options: [
            {key: '0', value: '1 or Less'}, {key: '1', value: '2-4 Hours'},
            {key: '2', value: '5-8 Hours'}, {key: '3', value: '9-12 Hours'},
            {key: '4', value: '13+ Hours'}
          ],
          order: 42 + 24,
          group: 3,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '25',
          label: 'HOW MANY TIMES A WEEK DOES THE PERSON REPORT THEY LEAVE THEIR HOME (NOT INCLUDING OUTINGS FOR MEDICAL APPOINTMENTS)?',
          value: '2',
          options: [
            {key: '0', value: '1 or Less'}, {key: '1', value: '2-3 Times'},
            {key: '2', value: '4-6 Times'}, {key: '3', value: '7 or More Times'},
            {key: '4', value: 'Unknown'}
          ],
          order: 42 + 25,
          group: 3,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '26',
          label: 'EMPLOYMENT:',
          value: '0',
          options: [
            {key: '0', value: 'Employed'},
            {key: '1', value: 'Not Working'},
            {key: '2', value: 'Retired'}],
          order: 42 + 26,
          group: 4,
          layout: 'half'
        }),

        new CheckboxQuestion({
          key: '27',
          label: 'LIVING SITUATION:',
          value: '0',
          options: [
            {key: '0', value: 'Community– (i.e. home, apartment, condo)'},
            {key: '1', value: 'Assisted – (i.e. group home, assisted living)'},
            {key: '2', value: 'Skilled – (i.e. hospital, SNF, institution)'}],
          order: 42 + 27,
          group: 4,
          layout: 'half'
        }),

        new CheckboxQuestion({
          key: '28',
          label: 'CURRENT MEANS OF TRANSPORTATION:',
          value: '0',
          options: [
            {key: '0', value: 'Accessible personal vehicle	'},
            {key: '1', value: 'Inaccessible personal vehicle'},
            {key: '2', value: 'Accessible public transportation (i.e ACCESS, Paratransit)'},
            {key: '3', value: 'Accessible vehicle for hire (i.e. taxi, rental, delivery service)'}],
          order: 42 + 28,
          group: 4,
          layout: '2column'
        }),

        new CheckboxQuestion({
          key: '30',
          label: 'HAS THE PERSON’S DEVICE REQUIRED REPAIR SERVICE (I.E. IT STOPPED WORKING NEEDING SERVICE FROM THE SUPPLIER) BUT NOT INCLUDING ROUTINE MAINTENANCE (IE: BATTERY, TIRES, ARMPADS) SINCE THE LAST FOLLOW-UP',
          value: '2',
          options: [
            {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
            {key: '2', value: 'Unsure'}
          ],
          order: 42 + 30,
          group: 5,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '31',
          label: 'HAS THE PERSON’S DEVICE BEEN SERVICED FOR MAINTENANCE SINCE THE LAST FOLLOW-UP (I.E. BATTERY, TIRES, ARMPADS)',
          value: '1',
          options: [
            {key: '0', value: 'Yes'}, {key: '1', value: 'No'},
            {key: '2', value: 'Unsure'}
          ],
          order: 42 + 31,
          group: 5,
          layout: '2row'
        }),

        new CheckboxQuestion({
          key: '32',
          label: 'POST DELIVERY DEVICE:',
          value: '10',
          options: [
            {key: '0', value: 'No Device'},
            {key: '1', value: 'Cane, Crutches, Walker'},
            {key: '2', value: 'Transport Wheelchair (attendant operated)'},
            {key: '3', value: 'K0001/K0002 Standard Manual Wheelchair'},
            {key: '4', value: 'K0003/K0004 Lightweight Manual Wheelchair'},
            {key: '5', value: 'K0005 Ultra Lightweight Manual Wheelchair'},
            {key: '6', value: 'K0006/K0007 Bariatric Wheelchair'},
            {key: '7', value: 'K0009 or Not Coded Manual Wheelchair'},
            {key: '8', value: 'Tilt-in-Space Manual Wheelchair'},
            {key: '9', value: 'POV/Scooter'},
            {key: '10', value: 'Group 1 Power Wheelchair'},
            {key: '11', value: 'Group 2 Power Wheelchair'},
            {key: '12', value: 'Group 3 Power Wheelchair'},
            {key: '13', value: 'Group 4 Power Wheelchair'},
            {key: '14', value: 'Not Applicable/Not Listed'}
          ],
          order: 42 + 32,
          group: 5,
          layout: '2column'
        }),

        new CheckboxQuestion({
          key: '35',
          label: 'POST DELIVERY EQUIPMENT MANUFACTURER:',
          value: '11',
          options: [
            {key: '0', value: 'Colours'},
            {key: '1', value: 'Drive'},
            {key: '2', value: 'Freedom Designs'},
            {key: '3', value: 'Golden Technologies'},
            {key: '4', value: 'Hoveround'},
            {key: '5', value: 'Invacare'},
            {key: '6', value: 'Ki Mobility'},
            {key: '7', value: 'Levo'},
            {key: '8', value: 'Lifestand'},
            {key: '9', value: 'PDG'},
            {key: '10', value: 'Permobil'},
            {key: '11', value: 'Pride/Quantum'},
            {key: '12', value: 'Sunrise'},
            {key: '13', value: 'Ti Lite'},
            {key: '14', value: 'Unknown/Not Applicable/Not Listed'}
          ],
          order: 42 + 35,
          group: 6,
          layout: '2column'
        }),

        new CheckboxQuestion({
          key: '36',
          label: 'POST DELIVERY ACCESSORIES:		(Check all that apply)	',
          value: '2',
          options: [
            {key: '0', value: 'Seat Elevator'},
            {key: '1', value: 'Tilt-in-Space'},
            {key: '2', value: 'Reclining Backrest'},
            {key: '3', value: 'Elevating Legrests'},
            {key: '4', value: 'Standing'},
            {key: '5', value: 'Power Assist for Manual Wheelchair'},
            {key: '6', value: 'No Accessory/Not Applicable/'}
          ],
          order: 42 + 36,
          group: 7,
          layout: '2column'
        }),

        new CheckboxQuestion({
          key: '37',
          label: 'POST DELIVERY CUSHION:',
          value: '2',
          options: [
            {key: '0', value: 'Sling/Solid Seat'},
            {key: '1', value: 'Captain Seat'},
            {key: '2', value: 'General Use Cushion'},
            {key: '3', value: 'Skin Protection Cushion'},
            {key: '4', value: 'Positioning Cushion'},
            {key: '5', value: 'Combination – Protection and Positioning'},
            {key: '6', value: 'Custom Fabricated Cushion'},
            {key: '7', value: 'No Cushion//Not Applicable'}
          ],
          order: 42 + 37,
          group: 8,
          layout: '2column'
        }),

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

        new TableQuestion({
          key: '2',
          label: 'My current means of mobility meets my comfort needs:',
          desc: '(e.g., heat/moisture, sitting tolerance, pain, stability)',
          value: '4',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 102,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '3',
          label: 'My current means of mobility meets my health needs:',
          desc: '(e.g., pressure sores, breathing, edema control, medical equipment)',
          value: '0',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 103,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '4',
          label: 'My current means of mobility allows me to operate it as independently, safely and efficiently as possible:',
          desc: ' (e.g., do what I want it to do when and where I want to do it)',
          value: '6',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 104,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '5',
          label: 'My current means of mobility allows me to reach and carry out tasks at different surface heights as independently, safely and efficiently as possible:',
          desc: ' (e.g., table, counters, floors, shelves)',
          value: '3',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 105,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '6',
          label: 'My current means of mobility allows me to transfer from one surface to another:',
          desc: '(e.g., bed, toilet, chair)',
          value: '1',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 106,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '7',
          label: 'My current means of mobility allows me to carry out personal care tasks:',
          desc: '(e.g., dressing, bowel/bladder care, eating, hygiene)',
          value: '3',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 107,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '8',
          label: 'My current means of mobility allows me to get around indoors:',
          desc: '(e.g., home, work, mall, restaurants, ramps, obstacles)',
          value: '1',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 108,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '9',
          label: 'My current means of mobility allows me to get around outdoors:',
          desc: '(e.g., uneven surfaces, dirt, grass, gravel, ramps, obstacles)',
          value: '3',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 109,
          group: 30,
          layout: '7column'
        }),

        new TableQuestion({
          key: '10',
          label: 'My current means of mobility allows me to use personal or public transportation as independently, safely and efficiently as possible:',
          desc: '(e.g., secure, stow, ride)',
          value: '6',
          comments: 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          options: [
            {key: '0', value: 'Completely Agree'}, {key: '1', value: 'Mostly Agree'},
            {key: '2', value: 'Slightly Agree'}, {key: '3', value: '*Slightly Disagree'},
            {key: '4', value: '*Mostly Disagree'}, {key: '5', value: '*Completely Disagree'},
            {key: '6', value: 'Does not apply'},
          ],
          order: 110,
          group: 30,
          layout: '7column'
        }),

      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 100) {
      const questions: QuestionBase<any>[] = [
        new Title({
          key: '',
          label: 'IDENTITAS',
          value: '',
          required: true,
          order: 0,
          group: 1,
          layout: 't1'
        }),

        new TextboxQuestion({
          key: '',
          label: 'No. Registar:',
          value: '0000001111',
          required: true,
          order: 1,
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Nama:',
          value: '',
          required: true,
          order: 2,
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Nama suami:',
          value: '',
          required: true,
          order: 3,
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Pekerjaan ibu:',
          value: '',
          required: true,
          order: 4,
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Pekerjaan suami:',
          value: '',
          required: true,
          order: 5,
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Umur:',
          value: '',
          required: true,
          order: 6,
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tinggi badan:',
          value: '',
          required: true,
          order: 7,
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Lila:',
          value: '',
          required: true,
          order: 8,
          group: 1,
          layout: 'full'
        }),
        
        new TextboxQuestion({
          key: '',
          label: 'Alamat:',
          value: '',
          required: true,
          order: 9,
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'RT:',
          value: '',
          required: true,
          order: 9,
          group: 1,
          layout: 'third'
        }),

        new TextboxQuestion({
          key: '',
          label: 'RW:',
          value: '',
          required: true,
          order: 10,
          group: 1,
          layout: 'third'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Desa:',
          value: '',
          required: true,
          order: 11,
          group: 1,
          layout: 'third'
        }),
        
        new TextboxQuestion({
          key: '',
          label: 'Dasa Wisma:',
          value: '',
          required: true,
          order: 12,
          group: 1,
          layout: 'half'
        }),
        
        new TextboxQuestion({
          key: '',
          label: 'Posyandu:',
          value: '',
          required: true,
          order: 13,
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Puskesmas:',
          value: '',
          required: true,
          order: 14,
          group: 1,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'ANAK',
          value: '',
          required: true,
          order: 15,
          group: 2,
          layout: 't1'
        }),

        new SimpleTableQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            [['Nama', 'Umur', 'Kondisi']],
            [
            ['<a href="/">1</a>',2,3],
            [2,3,4]
            ]
          ],
          required: true,
          order: 15,
          group: 2,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'FORMULIR KESEHATAN',
          value: '',
          required: true,
          order: 16,
          group: 3,
          layout: 't1'
        }),

        new ListQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            ['Kehamilan tanggal 2/3/2014'],
            ['Kehamilan tanggal 4/1/2017'],
          ],
          required: true,
          order: 17,
          group: 3,
          layout: ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    }  else if ((id === 101) || (id === 102)) {
      const questions: QuestionBase<any>[] = [

        new TextboxQuestion({
          key: '',
          label: 'Kehamilan tanggal',
          value: '',
          required: true,
          order: 1,
          group: 1,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'A. PENGAMATAN KEHAMILAN ANAMNESIS',
          value: '',
          required: true,
          order: 2,
          group: 2,
          layout: 't1'
        }),

        new Title({
          key: '',
          label: 'FUNGSI REPRODUKSI',
          value: '',
          required: true,
          order: 3,
          group: 2,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Hari pertama haid terakhir (HPHT)',
          value: '',
          required: true,
          order: 4,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Hari taksiran persalinan (HTP)',
          value: '',
          required: true,
          order: 5,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Kehamilan sekarang',
          value: '',
          required: true,
          order: 6,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Keluhan utama',
          value: '',
          required: true,
          order: 7,
          group: 2,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'RIWAYAT OBSTETRI',
          value: '',
          required: true,
          order: 8,
          group: 2,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'G',
          value: '',
          required: true,
          order: 9,
          group: 2,
          layout: 'third'
        }),

        new TextboxQuestion({
          key: '',
          label: 'P',
          value: '',
          required: true,
          order: 10,
          group: 2,
          layout: 'third'
        }),

        new TextboxQuestion({
          key: '',
          label: 'A',
          value: '',
          required: true,
          order: 11,
          group: 2,
          layout: 'third'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jumlah anak hidup',
          value: '',
          required: true,
          order: 12,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jumlah lahir mati',
          value: '',
          required: true,
          order: 13,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jarak persalinan terakhir',
          value: '',
          required: true,
          order: 14,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Penolong persalinan terakhir (sebutkan)',
          value: '',
          required: true,
          order: 15,
          group: 2,
          layout: 'full'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Cara persalinan yang lalu',
          value: '0',
          options: [{key: '0', value: 'Spontan'}, {key: '1', value: 'Buatan'}],
          order: 16,
          group: 2,
          layout: '1row'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jika buatan, sebutkan',
          value: '',
          required: true,
          order: 17,
          group: 2,
          layout: 'full subq'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Penggunaan kontrasepsi sebelum kehamilan ini (sebutkan)',
          value: '',
          required: true,
          order: 18,
          group: 2,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'RESIKO TINGGI',
          value: '',
          required: true,
          order: 19,
          group: 2,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Ditemukan tanggal',
          value: '',
          required: true,
          order: 20,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jenis resiko',
          value: '',
          required: true,
          order: 21,
          group: 2,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'RUJUK',
          value: '',
          required: true,
          order: 22,
          group: 2,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Dirujuk tanggal',
          value: '',
          required: true,
          order: 23,
          group: 2,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jam',
          value: '',
          required: true,
          order: 24,
          group: 2,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Dirujuk ke',
          value: '',
          required: true,
          order: 25,
          group: 2,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tindakan sementara',
          value: '',
          required: true,
          order: 26,
          group: 2,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'PEMERIKSAAN ANTENATAL',
          value: '',
          required: true,
          order: 27,
          group: 2,
          layout: 't2'
        }),

        new SimpleTableQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            [['Tanggal', 'Keluhan Sekarang', 'Tekanan Darah (MMHG)', 'Berat Badan (KG)', 'Umur Kehamilan (Minggu)', 'Tinggi Findus (cm)', 'Letak Janin KOP/S U/LI', 'Denyut Jantung Janin', 'Lab', 'Pemeriksaan Khusus', 'Tindakan dan Terapi TT/TO/Lain-lain', 'Paraf']],
            [
            ['','','','','','','','','','','',''],
            ['','','','','','','','','','','',''],
            ['','','','','','','','','','','',''],
            ['','','','','','','','','','','',''],
            ['','','','','','','','','','','',''],
            ]
          ],
          required: true,
          order: 28,
          group: 2,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'B. PENGAMATAN PERSALINAN',
          value: '',
          required: true,
          order: 28,
          group: 3,
          layout: 't1'
        }),

        new Title({
          key: '',
          label: 'PEMERIKSAAN DALAM',
          value: '',
          required: true,
          order: 29,
          group: 3,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Porsio',
          value: '',
          required: true,
          order: 30,
          group: 3,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Presentasi',
          value: '',
          required: true,
          order: 31,
          group: 3,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Pembukuan',
          value: '',
          required: true,
          order: 32,
          group: 3,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Posisi',
          value: '',
          required: true,
          order: 33,
          group: 3,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Ketuban',
          value: '',
          required: true,
          order: 34,
          group: 3,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Penurunan bagian terendah',
          value: '',
          required: true,
          order: 35,
          group: 3,
          layout: 'half'
        }),

        new Title({
          key: '',
          label: 'PEMANTAUAN',
          value: '',
          required: true,
          order: 36,
          group: 3,
          layout: 't2'
        }),

        new ComplexTableQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            [
              [['Tanggal dan Jam',1], ['Tekanan Darah (mm/Hg)',1], ['Nadi (/min)',1], ['Nafas',1], ['Suhu (C)',1], ['HIS',4], ['OJJ',2], ['Hasil Pemeriksaan Dalam',1], ['Paraf',1]],
              [['',1],['',1],['',1],['',1],['',1],['',1],['FRLK',1],['Lama',1],['Kuat',1],['FRLK',1],['Teratus',1],['',1],['',1]]
            ],
            [
              [['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
            ]
          ],
          required: true,
          order: 37,
          group: 3,
          layout: ''
        }),

        new Title({
          key: '',
          label: 'PEMERIKSAAN KALA III DAN IV',
          value: '',
          required: true,
          order: 38,
          group: 3,
          layout: 't2'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Plasenta',
          value: '1',
          options: [{key: '0', value: 'Lengkap'}, {key: '1', value: 'Tidak Lengkap'}],
          order: 39,
          group: 3,
          layout: '1row'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tindakan',
          value: '',
          required: true,
          order: 40,
          group: 3,
          layout: 'full'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Kontraksi Rahim',
          value: '0',
          options: [{key: '0', value: 'Baik'}, {key: '1', value: 'Buruk'}],
          order: 41,
          group: 3,
          layout: '1row'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tindakan',
          value: '',
          required: true,
          order: 42,
          group: 3,
          layout: 'full'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Perdarahan',
          value: '1',
          options: [{key: '0', value: 'Sedikit'}, {key: '1', value: 'Banyak'}],
          order: 43,
          group: 3,
          layout: '1row'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tindakan',
          value: '',
          required: true,
          order: 44,
          group: 3,
          layout: 'full'
        }),

        new Title({
          key: '',
          label: 'KESIMPULAN AKHIR PERSALINAN',
          value: '',
          required: true,
          order: 45,
          group: 3,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Persalinan tanggal',
          value: '',
          required: true,
          order: 46,
          group: 3,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jam',
          value: '',
          required: true,
          order: 47,
          group: 3,
          layout: 'half'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Cara persalinan',
          value: '1',
          options: [{key: '0', value: 'Spontan'}, {key: '1', value: 'Buatan'}],
          order: 48,
          group: 3,
          layout: '1row'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Keadaan bayi',
          value: '2',
          options: [{key: '0', value: 'Sehat'}, {key: '1', value: 'Sakit'}, {key: '2', value: 'Lahir mati'}],
          order: 49,
          group: 3,
          layout: '1row'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Berat badan bayi',
          value: '',
          suffix: 'gram',
          required: true,
          order: 50,
          group: 3,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Warna',
          value: '',
          suffix: 'gram',
          required: true,
          order: 51,
          group: 3,
          layout: 'full'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Jenis kelamin',
          value: '0',
          options: [{key: '0', value: 'Laki-laki'}, {key: '1', value: 'Perempuan'}],
          order: 52,
          group: 3,
          layout: '1row'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Keadan ibu',
          value: '2',
          options: [{key: '0', value: 'Sehat'}, {key: '1', value: 'Sakit'}, {key: '2', value: 'Meninggal'}],
          order: 53,
          group: 3,
          layout: '1row'
        }),

        new Title({
          key: '',
          label: 'C. PENGAMATAN NIFAS',
          value: '',
          required: true,
          order: 54,
          group: 4,
          layout: 't1'
        }),

        new Title({
          key: '',
          label: 'PENGAMATAN',
          value: '',
          required: true,
          order: 55,
          group: 4,
          layout: 't2'
        }),

        new SimpleTableQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            [['Tanggal dan Jam', 'Anamnesis', 'Tekanan Darah (MMHG)', 'Nadi (/mml)', 'Nafas (/mml)', 'Suhu (C)', 'Kontraksi Rahim', 'Perdarahan', 'Lochia', 'BAB', 'BAK', 'Menyusui Dini', 'Terapi dan Tindakan', 'Paraf']],
            [
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
            ]
          ],
          required: true,
          order: 56,
          group: 4,
          layout: ''
        }),

        new Title({
          key: '',
          label: 'KESIMPULAN AKHIR NIFAS',
          value: '',
          required: true,
          order: 57,
          group: 4,
          layout: 't2'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Keadaan bayi',
          value: '1',
          options: [{key: '0', value: 'Sehat'}, {key: '1', value: 'Sakit'}, {key: '2', value: 'Meninggal'}],
          order: 58,
          group: 4,
          layout: '1row'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Keadaan ibu',
          value: '1',
          options: [{key: '0', value: 'Sehat'}, {key: '1', value: 'Sakit'}, {key: '2', value: 'Meninggal'}],
          order: 59,
          group: 4,
          layout: '1row'
        }),

        new Title({
          key: '',
          label: 'RUJUK',
          value: '',
          required: true,
          order: 60,
          group: 4,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Dirujuk tanggal',
          value: '',
          required: true,
          order: 61,
          group: 4,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jam',
          value: '',
          required: true,
          order: 62,
          group: 4,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Dirujuk ke',
          value: '',
          required: true,
          order: 63,
          group: 4,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tindakan sementara',
          value: '',
          required: true,
          order: 64,
          group: 4,
          layout: 'full'
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 103) {
      const questions: QuestionBase<any>[] = [
        
        new Title({
          key: '',
          label: 'IDENTITAS',
          value: '',
          required: true,
          order: 1,
          group: 1,
          layout: 't1'
        }),

        new TextboxQuestion({
          key: '',
          label: 'No. Registar',
          value: '',
          required: true,
          order: 2,
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Nama anak',
          value: '',
          required: true,
          order: 3, 
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Umur',
          value: '',
          suffix: 'tahun',
          required: true,
          order: 4, 
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Alamat',
          value: '',
          required: true,
          order: 5, 
          group: 1,
          layout: 'full'
        }),
        
        new TextboxQuestion({
          key: '',
          label: 'RT',
          value: '',
          required: true,
          order: 6, 
          group: 1,
          layout: 'third'
        }),

        new TextboxQuestion({
          key: '',
          label: 'RW',
          value: '',
          required: true,
          order: 7, 
          group: 1,
          layout: 'third'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Desa',
          value: '',
          required: true,
          order: 8, 
          group: 1,
          layout: 'third'
        }),

        new Title({
          key: '',
          label: 'FORMULIR KESEHATAN',
          value: '',
          required: true,
          order: 9,
          group: 2,
          layout: 't1'
        }),

        new ListQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            ['Keterangan Waktu Kelahiran tanggal 2/3/2014'],
            ['Keterangan Imunisasi'],
          ],
          required: true,
          order: 10,
          group: 2,
          layout: ''
        }),

        new ComplexTableQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            [
              [['Umur (bln)',1], [0,1], [1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [10,1], [11,1], [12,1], [13,1], [14,1], [15,1], [16,1], [17,1], [18,1], [19,1], [20,1], [21,1], [22,1], [23,1], [24,1]]
            ],
            [
              [['Bulan nbangan',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['BB (kg)',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['KBM (gr)',1],[200,25]],
              [['N/T',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]]
            ]
          ],
          required: true,
          order: 37,
          group: 3,
          layout: ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 104) {
      const questions: QuestionBase<any>[] = [
        
        new Title({
          key: '',
          label: 'KETERANGAN WAKTU KELAHIRAN',
          value: '',
          required: true,
          order: 1,
          group: 1,
          layout: 't1'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tanggal lahir',
          value: '',
          required: true,
          order: 2,
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Tempat kelahiran',
          value: '',
          required: true,
          order: 3, 
          group: 1,
          layout: 'full'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Cara kelahiran',
          value: '1',
          options: [{key: '0', value: 'Spontan'}, {key: '1', value: 'SC/Vakum'}],
          order: 4,
          group: 1,
          layout: '1row'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Jika SC/Vakum, sebutkan',
          value: '',
          required: true,
          order: 5, 
          group: 1,
          layout: 'full subq'
        }),

        new Title({
          key: '',
          label: 'Berat badan waktu lahir',
          value: '',
          required: true,
          order: 6,
          group: 1,
          layout: 't2'
        }),

        new TextboxQuestion({
          key: '',
          label: 'BBL',
          value: '',
          required: true,
          order: 7, 
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: '/ PB',
          value: '',
          required: true,
          order: 8, 
          group: 1,
          layout: 'half'
        }),

        new CheckboxQuestion({
          key: '',
          label: 'Jenis kelamin',
          value: '1',
          options: [{key: '0', value: 'Laki-laki'}, {key: '1', value: 'Perempuan'}],
          order: 9,
          group: 1,
          layout: '1row'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Nama ayah',
          value: '',
          required: true,
          order: 10, 
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Pekerjaan ayah',
          value: '',
          required: true,
          order: 11, 
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Suku',
          value: '',
          required: true,
          order: 12, 
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Nama ibu',
          value: '',
          required: true,
          order: 13, 
          group: 1,
          layout: 'full'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Pekerjaan ibu',
          value: '',
          required: true,
          order: 14, 
          group: 1,
          layout: 'half'
        }),

        new TextboxQuestion({
          key: '',
          label: 'Suku',
          value: '',
          required: true,
          order: 15, 
          group: 1,
          layout: 'half'
        })
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 105) {
      const questions: QuestionBase<any>[] = [

        new Title({
          key: '',
          label: 'KETERANGAN IMUNISASI',
          value: '',
          required: true,
          order: 1,
          group: 1,
          layout: 't1'
        }),

        new SimpleTableQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            [['Imunisasi', 'Tanggal', 'Tanggal', 'Tanggal', 'Tanggal', 'Tanggal', 'Keterangan'  ]],
            [
              ['BCG','','','','','',''],
              ['Campak','','','','','',''],
              ['DPT','','','','','',''],
              ['POLIO','','','','','',''],
              ['Hepatitis','','','','','',''],
            ]
          ],
          required: true,
          order: 2,
          group: 1,
          layout: ''
        }),

        new Title({
          key: '',
          label: 'BOOSTER. HIB. CAMPAK',
          value: '',
          required: true,
          order: 3,
          group: 1,
          layout: 't2'
        }),

        new SimpleTableQuestion({
          key: '',
          label: '',
          value: '',
          contents: [
            [['Tanggal', 'Umur', 'Berat Badan', 'Makanan Anak', 'Gejala', 'Keterangan']],
            [
              ['','','','','',''],
              ['','','','','',''],
              ['','','','','',''],
              ['','','','','',''],
              ['','','','','',''],
            ]
          ],
          required: true,
          order: 4,
          group: 1,
          layout: ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } 

  }
}
