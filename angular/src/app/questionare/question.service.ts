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
    } else {
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
    }

  }
}
