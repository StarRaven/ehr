import {Injectable} from '@angular/core';

import {QuestionBase} from './question-base';
import {CheckboxQuestion} from './question-checkbox';
import {DropdownQuestion} from './question-dropdown';
import {TableQuestion} from './question-table';
import {TextboxQuestion} from './question-textbox';
import {Title} from './question-title';
import {FreeText} from './question-freetext';
import {LinkTableQuestion} from './question-linktable';
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
          'key': '1.',
          'label': 'VGM Account Number',
          'value': '0000001111',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '2.',
          'label': 'ATP RESNA Number',
          'value': '0000000001',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '3.',
          'label': 'Completed By',
          'value': 'John',
          'required': true,
          'order': 3,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '15.',
          'label': 'Date of Initial Evaluation',
          'value': '01/11/2018',
          'required': true,
          'order': 15,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '16.',
          'label': 'Date FMA Completed',
          'value': '02/12/2018',
          'required': true,
          'order': 16,
          'group': 1,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '17a.',
          'label': 'Is this a Homelink Order?',
          'value': '0',
          'options': [{'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'}],
          'order': 17.1,
          'group': 1,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '17b.',
          'label': 'If yes, what is the Homelink Order #?',
          'value': '123',
          'required': true,
          'order': 17.2,
          'group': 1,
          'layout': 'full subq'
        }),

        new CheckboxQuestion({
          'key': '18.',
          'label': 'PRIMARY DIAGNOSIS',
          'value': '10',
          'options': [
            {'key': '0', 'value': 'Cerebral Palsy'},
            {'key': '1', 'value': 'SCI (Paraplegia)'},
            {'key': '2', 'value': 'SCI (Tetraplegia/Quadriplegia)'},
            {'key': '3', 'value': 'Multiple Sclerosis'},
            {'key': '4', 'value': 'Stroke/CVA'},
            {'key': '5', 'value': 'Cardiopulmonary Disease'},
            {'key': '6', 'value': 'Osteoarthritis'},
            {
              'key': '7',
              'value':
                  'Amyotrophic Lateral Sclerosis/Primary Lateral Sclerosis	'
            },
            {'key': '8', 'value': 'Traumatic Brain Injury (TBI)'},
            {'key': '9', 'value': 'Amputation'},
            {'key': '10', 'value': 'Muscular Dystrophy'},
            {'key': '11', 'value': 'Spina Bifida'},
            {'key': '12', 'value': 'Parkinson Disease'},
            {'key': '13', 'value': 'Rheumatoid Arthritis'},
            {'key': '14', 'value': 'Spinal Stenosis'},
            {'key': '15', 'value': 'Huntington Disease'},
            {'key': '16', 'value': 'Post-Polio Syndrome'},
            {'key': '17', 'value': 'Osteogenesis Imperfecta'},
            {'key': '18', 'value': 'Spinocerebellar Disease'},
            {'key': '19', 'value': 'Morbid Obesity'},
            {'key': '20', 'value': 'Cerebellar Degeneration'},
            {'key': '21', 'value': 'Arthrogryposis'},
            {'key': '22', 'value': 'Other Neuromuscular or Congenital Disease (Not Listed Above)'},
          ],
          'order': 18,
          'group': 2,
          'layout': '2column'
        }),

        new TextboxQuestion({
          'key': '19.',
          'label': 'YEAR OF ONSET',
          'value': '2017',
          'required': true,
          'order': 19,
          'group': 2,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '20.',
          'label': 'DOES THE PERSON CURRENTLY HAVE SEATING-RELATED SKIN BREAKDOWN?',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 20,
          'group': 3,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '21.',
          'label': 'DOES THE PERSON HAVE HEALED SEATING-RELATED SKIN BREAKDOWN?',
          'value': '1',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 21,
          'group': 3,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '22a.',
          'label': 'HAS THE PERSON BEEN ADMITTED TO A HEALTHCARE FACILITY IN THE LAST 3 MONTHS? (I.E. IN-PATIENT, NURSING, OR REHABILITATION FACILITY)',
          'value': '0',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 22.1,
          'group': 3,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '22b.',
          'label': 'IF YES, WAS THE ENCOUNTER A RESULT OF A SEATING AND MOBILITY INCIDENT, SUCH AS A FALL OR SKIN BREAKDOWN?',
          'value': '1',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 22.2,
          'group': 3,
          'layout': '2row subq'
        }),

        new CheckboxQuestion({
          'key': '23.',
          'label': 'HOW MANY TIMES HAS THE PERSON FALLEN IN THE LAST 3 MONTHS?',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'None'}, {'key': '1', 'value': '1-2 times'},
            {'key': '2', 'value': '3-4 times'}, {'key': '3', 'value': '5 or more times'},
            {'key': '4', 'value': 'Unknown'}
          ],
          'order': 23,
          'group': 4,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '24.',
          'label': 'HOW MANY HOURS A DAY DOES THE PERSON REPORT THEY USE THE DEVICE IN THE LAST 3 MONTHS?',
          'value': '1',
          'options': [
            {'key': '0', 'value': '1 or Less'}, {'key': '1', 'value': '2-4 Hours'},
            {'key': '2', 'value': '5-8 Hours'}, {'key': '3', 'value': '9-12 Hours'},
            {'key': '4', 'value': '13+ Hours'}
          ],
          'order': 24,
          'group': 4,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '25.',
          'label': 'HOW MANY TIMES A WEEK DOES THE PERSON REPORT THEY LEAVE THEIR HOME (NOT INCLUDING OUTINGS FOR MEDICAL APPOINTMENTS)?',
          'value': '3',
          'options': [
            {'key': '0', 'value': '1 or Less'}, {'key': '1', 'value': '2-4 Hours'},
            {'key': '2', 'value': '5-8 Hours'}, {'key': '3', 'value': '9-12 Hours'},
            {'key': '4', 'value': '13+ Hours'}
          ],
          'order': 25,
          'group': 4,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '26.',
          'label': 'EMPLOYMENT:',
          'value': '0',
          'options': [
            {'key': '0', 'value': 'Employed'}, {'key': '1', 'value': 'Not Working'},
            {'key': '2', 'value': 'Retired'}
          ],
          'order': 26,
          'group': 4,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '27.',
          'label': 'LIVING SITUATION:',
          'value': '1',
          'options': [
            {'key': '0', 'value': 'Community – (i.e. home, apartment, condo)'}, {'key': '1', 'value': 'Assisted – (i.e. group home, assisted living)'},
            {'key': '2', 'value': 'Skilled – (i.e. hospital, SNF, institution)'}
          ],
          'order': 27,
          'group': 4,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '28.',
          'label': 'CURRENT MEANS OF TRANSPORTATION:',
          'value': '3',
          'options': [
            {'key': '0', 'value': 'Accessible personal vehicle'}, {'key': '1', 'value': 'Inaccessible personal vehicle'},
            {'key': '2', 'value': 'Accessible public transportation (i.e ACCESS, Paratransit)'}, {'key': '3', 'value': 'Accessible vehicle for hire (i.e. taxi, rental, delivery service)'},
          ],
          'order': 28,
          'group': 4,
          'layout': '2column'
        }),

        new CheckboxQuestion({
          'key': '29.',
          'label': 'CURRENT FUNDING:',
          'value': '7',
          'options': [
            {'key': '0', 'value': 'Medicare'},
            {'key': '1', 'value': 'Medicare Managed Care'},
            {'key': '2', 'value': 'Medicaid'},
            {'key': '3', 'value': 'Medicaid Managed Care'},
            {'key': '4', 'value': 'Vocational Rehab'},
            {'key': '5', 'value': 'Private Insurance - Fee for Service'},
            {'key': '6', 'value': 'Private Insurance – HMO'},
            {'key': '7', 'value': 'Worker’s Comp'},
            {'key': '8', 'value': 'VA'},
            {'key': '9', 'value': 'Private Pay'},
            {'key': '10', 'value': 'Other/Not Listed'}
          ],
          'order': 29,
          'group': 5,
          'layout': '2column'
        }),

        new CheckboxQuestion({
          'key': '30.',
          'label': 'HAS THE PERSON’S DEVICE REQUIRED REPAIR SERVICE (I.E. IT STOPPED WORKING NEEDING SERVICE FROM THE SUPPLIER) BUT NOT INCLUDING ROUTINE MAINTENANCE (IE: BATTERY, TIRES, ARMPADS) IN THE LAST 3 MONTHS?',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 30,
          'group': 6,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '31.',
          'label': 'HAS THE PERSON’S DEVICE BEEN SERVICED FOR MAINTENANCE IN THE LAST 3 MONTHS (I.E. BATTERY, TIRES, ARMPADS)',
          'value': '0',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 31,
          'group': 6,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '32.',
          'label': 'PRIMARY DIAGNOSIS',
          'value': '12',
          'options': [
            {'key': '0', 'value': 'Cerebral Palsy'},
            {'key': '1', 'value': 'SCI (Paraplegia)'},
            {'key': '2', 'value': 'SCI (Tetraplegia/Quadriplegia)'},
            {'key': '3', 'value': 'Multiple Sclerosis'},
            {'key': '4', 'value': 'Stroke/CVA'},
            {'key': '5', 'value': 'Cardiopulmonary Disease'},
            {'key': '6', 'value': 'Osteoarthritis'},
            {
              'key': '7',
              'value':
                  'Amyotrophic Lateral Sclerosis/Primary Lateral Sclerosis	'
            },
            {'key': '8', 'value': 'Traumatic Brain Injury (TBI)'},
            {'key': '9', 'value': 'Amputation'},
            {'key': '10', 'value': 'Muscular Dystrophy'},
            {'key': '11', 'value': 'Spina Bifida'},
            {'key': '12', 'value': 'Parkinson Disease'},
            {'key': '13', 'value': 'Rheumatoid Arthritis'},
            {'key': '14', 'value': 'Spinal Stenosis'},
            {'key': '15', 'value': 'Huntington Disease'},
            {'key': '16', 'value': 'Post-Polio Syndrome'},
            {'key': '17', 'value': 'Osteogenesis Imperfecta'},
            {'key': '18', 'value': 'Spinocerebellar Disease'},
            {'key': '19', 'value': 'Morbid Obesity'},
            {'key': '20', 'value': 'Cerebellar Degeneration'},
            {'key': '21', 'value': 'Arthrogryposis'},
            {'key': '22', 'value': 'Other Neuromuscular or Congenital Disease (Not Listed Above)'},
          ],
          'order': 32,
          'group': 6,
          'layout': '2column'
        }),

        new TableQuestion({
          'key': '1',
          'label': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible:',
          'desc': '(e.g., tasks I want to do, need to do, am required to do- when and where needed)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 101,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '2',
          'label': 'My current means of mobility meets my comfort needs:',
          'desc': '(e.g., heat/moisture, sitting tolerance, pain, stability)',
          'value': '4',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 102,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '3',
          'label': 'My current means of mobility meets my health needs:',
          'desc': '(e.g., pressure sores, breathing, edema control, medical equipment)',
          'value': '0',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 103,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '4',
          'label': 'My current means of mobility allows me to operate it as independently, safely and efficiently as possible:',
          'desc': ' (e.g., do what I want it to do when and where I want to do it)',
          'value': '6',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 104,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '5',
          'label': 'My current means of mobility allows me to reach and carry out tasks at different surface heights as independently, safely and efficiently as possible:',
          'desc': ' (e.g., table, counters, floors, shelves)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 105,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '6',
          'label': 'My current means of mobility allows me to transfer from one surface to another:',
          'desc': '(e.g., bed, toilet, chair)',
          'value': '1',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 106,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '7',
          'label': 'My current means of mobility allows me to carry out personal care tasks:',
          'desc': '(e.g., dressing, bowel/bladder care, eating, hygiene)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 107,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '8',
          'label': 'My current means of mobility allows me to get around indoors:',
          'desc': '(e.g., home, work, mall, restaurants, ramps, obstacles)',
          'value': '1',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 108,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '9',
          'label': 'My current means of mobility allows me to get around outdoors:',
          'desc': '(e.g., uneven surfaces, dirt, grass, gravel, ramps, obstacles)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 109,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '10',
          'label': 'My current means of mobility allows me to use personal or public transportation as independently, safely and efficiently as possible:',
          'desc': '(e.g., secure, stow, ride)',
          'value': '6',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 110,
          'group': 30,
          'layout': '7column'
        }),
        
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 2) {
      const questions: QuestionBase<any>[] = [
        new TextboxQuestion({
          'key': '1.',
          'label': 'VGM Account Number',
          'value': '0000001111',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '2.',
          'label': 'ATP RESNA Number',
          'value': '0000000001',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '3.',
          'label': 'Completed By',
          'value': 'John',
          'required': true,
          'order': 3,
          'group': 1,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '38a.',
          'label': 'Current status of client?',
          'value': '0',
          'options': [{'key': '0', 'value': 'Active'}, {'key': '1', 'value': 'Not-Active'}],
          'order': 38.1,
          'group': 1,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '38b.',
          'label': 'If not-active, what is the reason they are no longer being followed?',
          'value': '0',
          'options': [
            {'key': '0', 'value': 'Deceased'},
            {'key': '1', 'value': 'Change in status (i.e. no longer appropriate for recommended device)'},
            {'key': '2', 'value': 'Funding issues'},
            {'key': '3', 'value': 'Unable to contact client (i.e. contact information changed)'},
            {'key': '4', 'value': 'Environmental/Accessibility Issue'}],
          'order': 38.2,
          'group': 1,
          'layout': '1column subq'
        }),

        new TextboxQuestion({
          'key': '39.',
          'label': 'Date of Delivery',
          'value': '01/12/2018',
          'required': true,
          'order': 39,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '40.',
          'label': 'Date Follow-Up FMA Completed',
          'value': '02/22/2018',
          'required': true,
          'order': 40,
          'group': 1,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '41.',
          'label': 'If not-active, what is the reason they are no longer being followed?',
          'value': '3',
          'options': [
            {'key': '0', 'value': '21 Day Post Delivery'},
            {'key': '1', 'value': '90 Days'},
            {'key': '2', 'value': '6 Months'},
            {'key': '3', 'value': '12 Months'},
            {'key': '4', 'value': 'Annual'}],
          'order': 41,
          'group': 1,
          'layout': '2column'
        }),

        new TextboxQuestion({
          'key': '42.',
          'label': 'Follow-Up Loaded into Database',
          'value': '03/22/2018',
          'required': true,
          'order': 42,
          'group': 1,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '20.',
          'label': 'DOES THE PERSON CURRENTLY HAVE SEATING-RELATED SKIN BREAKDOWN?',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 42 + 20,
          'group': 2,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '21.',
          'label': 'DOES THE PERSON HAVE HEALED SEATING-RELATED SKIN BREAKDOWN?',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 42 + 21,
          'group': 2,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '22a.',
          'label': 'HAS THE PERSON BEEN ADMITTED TO A HEALTHCARE FACILITY SINCE THE LAST FOLLOW-UP? (I.E. IN-PATIENT, NURSING, OR REHABILITATION FACILITY)',
          'value': '1',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 42 + 22.1,
          'group': 2,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '22b.',
          'label': 'IF YES, WAS THE ENCOUNTER A RESULT OF A SEATING AND MOBILITY INCIDENT, SUCH AS A FALL OR PRESSURE SORE?',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 42 + 22.2,
          'group': 2,
          'layout': '2row subq'
        }),

        new CheckboxQuestion({
          'key': '23.',
          'label': 'HOW MANY TIMES HAS THE PERSON FALLEN SINCE THE LAST FOLLOW-UP?',
          'value': '3',
          'options': [
            {'key': '0', 'value': 'None'}, {'key': '1', 'value': '1-2 times'},
            {'key': '2', 'value': '3-4 times'}, {'key': '3', 'value': '5 or more times'},
            {'key': '4', 'value': 'Unknown'}
          ],
          'order': 42 + 23,
          'group': 3,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '24.',
          'label': 'HOW MANY HOURS PER DAY DOES THE PERSON REPORT THEY USE THE DEVICE?',
          'value': '4',
          'options': [
            {'key': '0', 'value': '1 or Less'}, {'key': '1', 'value': '2-4 Hours'},
            {'key': '2', 'value': '5-8 Hours'}, {'key': '3', 'value': '9-12 Hours'},
            {'key': '4', 'value': '13+ Hours'}
          ],
          'order': 42 + 24,
          'group': 3,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '25.',
          'label': 'HOW MANY TIMES A WEEK DOES THE PERSON REPORT THEY LEAVE THEIR HOME (NOT INCLUDING OUTINGS FOR MEDICAL APPOINTMENTS)?',
          'value': '2',
          'options': [
            {'key': '0', 'value': '1 or Less'}, {'key': '1', 'value': '2-3 Times'},
            {'key': '2', 'value': '4-6 Times'}, {'key': '3', 'value': '7 or More Times'},
            {'key': '4', 'value': 'Unknown'}
          ],
          'order': 42 + 25,
          'group': 3,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '26.',
          'label': 'EMPLOYMENT:',
          'value': '0',
          'options': [
            {'key': '0', 'value': 'Employed'},
            {'key': '1', 'value': 'Not Working'},
            {'key': '2', 'value': 'Retired'}],
          'order': 42 + 26,
          'group': 4,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '27.',
          'label': 'LIVING SITUATION:',
          'value': '0',
          'options': [
            {'key': '0', 'value': 'Community– (i.e. home, apartment, condo)'},
            {'key': '1', 'value': 'Assisted – (i.e. group home, assisted living)'},
            {'key': '2', 'value': 'Skilled – (i.e. hospital, SNF, institution)'}],
          'order': 42 + 27,
          'group': 4,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '28.',
          'label': 'CURRENT MEANS OF TRANSPORTATION:',
          'value': '0',
          'options': [
            {'key': '0', 'value': 'Accessible personal vehicle	'},
            {'key': '1', 'value': 'Inaccessible personal vehicle'},
            {'key': '2', 'value': 'Accessible public transportation (i.e ACCESS, Paratransit)'},
            {'key': '3', 'value': 'Accessible vehicle for hire (i.e. taxi, rental, delivery service)'}],
          'order': 42 + 28,
          'group': 4,
          'layout': '2column'
        }),

        new CheckboxQuestion({
          'key': '30.',
          'label': 'HAS THE PERSON’S DEVICE REQUIRED REPAIR SERVICE (I.E. IT STOPPED WORKING NEEDING SERVICE FROM THE SUPPLIER) BUT NOT INCLUDING ROUTINE MAINTENANCE (IE: BATTERY, TIRES, ARMPADS) SINCE THE LAST FOLLOW-UP',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 42 + 30,
          'group': 5,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '31.',
          'label': 'HAS THE PERSON’S DEVICE BEEN SERVICED FOR MAINTENANCE SINCE THE LAST FOLLOW-UP (I.E. BATTERY, TIRES, ARMPADS)',
          'value': '1',
          'options': [
            {'key': '0', 'value': 'Yes'}, {'key': '1', 'value': 'No'},
            {'key': '2', 'value': 'Unsure'}
          ],
          'order': 42 + 31,
          'group': 5,
          'layout': '2row'
        }),

        new CheckboxQuestion({
          'key': '32.',
          'label': 'POST DELIVERY DEVICE:',
          'value': '10',
          'options': [
            {'key': '0', 'value': 'No Device'},
            {'key': '1', 'value': 'Cane, Crutches, Walker'},
            {'key': '2', 'value': 'Transport Wheelchair (attendant operated)'},
            {'key': '3', 'value': 'K0001/K0002 Standard Manual Wheelchair'},
            {'key': '4', 'value': 'K0003/K0004 Lightweight Manual Wheelchair'},
            {'key': '5', 'value': 'K0005 Ultra Lightweight Manual Wheelchair'},
            {'key': '6', 'value': 'K0006/K0007 Bariatric Wheelchair'},
            {'key': '7', 'value': 'K0009 or Not Coded Manual Wheelchair'},
            {'key': '8', 'value': 'Tilt-in-Space Manual Wheelchair'},
            {'key': '9', 'value': 'POV/Scooter'},
            {'key': '10', 'value': 'Group 1 Power Wheelchair'},
            {'key': '11', 'value': 'Group 2 Power Wheelchair'},
            {'key': '12', 'value': 'Group 3 Power Wheelchair'},
            {'key': '13', 'value': 'Group 4 Power Wheelchair'},
            {'key': '14', 'value': 'Not Applicable/Not Listed'}
          ],
          'order': 42 + 32,
          'group': 5,
          'layout': '2column'
        }),

        new CheckboxQuestion({
          'key': '35.',
          'label': 'POST DELIVERY EQUIPMENT MANUFACTURER:',
          'value': '11',
          'options': [
            {'key': '0', 'value': 'Colours'},
            {'key': '1', 'value': 'Drive'},
            {'key': '2', 'value': 'Freedom Designs'},
            {'key': '3', 'value': 'Golden Technologies'},
            {'key': '4', 'value': 'Hoveround'},
            {'key': '5', 'value': 'Invacare'},
            {'key': '6', 'value': 'Ki Mobility'},
            {'key': '7', 'value': 'Levo'},
            {'key': '8', 'value': 'Lifestand'},
            {'key': '9', 'value': 'PDG'},
            {'key': '10', 'value': 'Permobil'},
            {'key': '11', 'value': 'Pride/Quantum'},
            {'key': '12', 'value': 'Sunrise'},
            {'key': '13', 'value': 'Ti Lite'},
            {'key': '14', 'value': 'Unknown/Not Applicable/Not Listed'}
          ],
          'order': 42 + 35,
          'group': 6,
          'layout': '2column'
        }),

        new CheckboxQuestion({
          'key': '36.',
          'label': 'POST DELIVERY ACCESSORIES:		(Check all that apply)	',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Seat Elevator'},
            {'key': '1', 'value': 'Tilt-in-Space'},
            {'key': '2', 'value': 'Reclining Backrest'},
            {'key': '3', 'value': 'Elevating Legrests'},
            {'key': '4', 'value': 'Standing'},
            {'key': '5', 'value': 'Power Assist for Manual Wheelchair'},
            {'key': '6', 'value': 'No Accessory/Not Applicable/'}
          ],
          'order': 42 + 36,
          'group': 7,
          'layout': '2column'
        }),

        new CheckboxQuestion({
          'key': '37.',
          'label': 'POST DELIVERY CUSHION:',
          'value': '2',
          'options': [
            {'key': '0', 'value': 'Sling/Solid Seat'},
            {'key': '1', 'value': 'Captain Seat'},
            {'key': '2', 'value': 'General Use Cushion'},
            {'key': '3', 'value': 'Skin Protection Cushion'},
            {'key': '4', 'value': 'Positioning Cushion'},
            {'key': '5', 'value': 'Combination – Protection and Positioning'},
            {'key': '6', 'value': 'Custom Fabricated Cushion'},
            {'key': '7', 'value': 'No Cushion//Not Applicable'}
          ],
          'order': 42 + 37,
          'group': 8,
          'layout': '2column'
        }),

        new TableQuestion({
          'key': '',
          'label': 'What is your current means of mobility device?',
          'desc': '(Check all that apply)',
          'value': '5',
          'comments': 'What is your current means of mobility device?',
          'options': [
            {'key': '0', 'value': 'Walking'}, {'key': '1', 'value': 'Walker'},
            {'key': '2', 'value': 'Cane'}, {'key': '3', 'value': 'Crutch'},
            {'key': '4', 'value': 'Manual Wheelchair'}, {'key': '5', 'value': 'Power Wheelchair'},
            {'key': '6', 'value': 'Scooter'}, {'key': '7', 'value': 'Prosthetic'},
            {'key': '8', 'value': 'Orthotic'}
          ],
          'order': 100,
          'group': 30,
          'layout': '1column'
        }),

        new TableQuestion({
          'key': '1',
          'label': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible:',
          'desc': '(e.g., tasks I want to do, need to do, am required to do- when and where needed)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 101,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '2',
          'label': 'My current means of mobility meets my comfort needs:',
          'desc': '(e.g., heat/moisture, sitting tolerance, pain, stability)',
          'value': '4',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 102,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '3',
          'label': 'My current means of mobility meets my health needs:',
          'desc': '(e.g., pressure sores, breathing, edema control, medical equipment)',
          'value': '0',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 103,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '4',
          'label': 'My current means of mobility allows me to operate it as independently, safely and efficiently as possible:',
          'desc': ' (e.g., do what I want it to do when and where I want to do it)',
          'value': '6',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 104,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '5',
          'label': 'My current means of mobility allows me to reach and carry out tasks at different surface heights as independently, safely and efficiently as possible:',
          'desc': ' (e.g., table, counters, floors, shelves)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 105,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '6',
          'label': 'My current means of mobility allows me to transfer from one surface to another:',
          'desc': '(e.g., bed, toilet, chair)',
          'value': '1',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 106,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '7',
          'label': 'My current means of mobility allows me to carry out personal care tasks:',
          'desc': '(e.g., dressing, bowel/bladder care, eating, hygiene)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 107,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '8',
          'label': 'My current means of mobility allows me to get around indoors:',
          'desc': '(e.g., home, work, mall, restaurants, ramps, obstacles)',
          'value': '1',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 108,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '9',
          'label': 'My current means of mobility allows me to get around outdoors:',
          'desc': '(e.g., uneven surfaces, dirt, grass, gravel, ramps, obstacles)',
          'value': '3',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 109,
          'group': 30,
          'layout': '7column'
        }),

        new TableQuestion({
          'key': '10',
          'label': 'My current means of mobility allows me to use personal or public transportation as independently, safely and efficiently as possible:',
          'desc': '(e.g., secure, stow, ride)',
          'value': '6',
          'comments': 'My current means of mobility allows me to carry out my daily routine as independently, safely and efficiently as possible',
          'options': [
            {'key': '0', 'value': 'Completely Agree'}, {'key': '1', 'value': 'Mostly Agree'},
            {'key': '2', 'value': 'Slightly Agree'}, {'key': '3', 'value': '*Slightly Disagree'},
            {'key': '4', 'value': '*Mostly Disagree'}, {'key': '5', 'value': '*Completely Disagree'},
            {'key': '6', 'value': 'Does not apply'},
          ],
          'order': 110,
          'group': 30,
          'layout': '7column'
        }),

      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 100) {
      const questions: QuestionBase<any>[] = [
        new Title({
          'key': '',
          'label': 'IDENTITAS',
          'value': '',
          'required': true,
          'order': 0,
          'group': 1,
          'layout': 't1'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'No. Registrar',
          'value': '123-4567',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Nama',
          'value': 'YEMIMA TABUNI',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tanggal lahir',
          'value': '03/01/1980',
          'required': true,
          'order': 2.5,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Nama suami',
          'value': 'OKTAVIANUS MAGAI',
          'required': true,
          'order': 3,
          'group': 1,
          'layout': 'half'
        }),
        
        new TextboxQuestion({
          'key': '',
          'label': 'Pekerjaan ibu',
          'value': 'bertani',
          'required': true,
          'order': 4,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Pekerjaan suami',
          'value': 'buruh',
          'required': true,
          'order': 5,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Umur',
          'value': '32',
          suffix: 'tahun',
          'required': true,
          'order': 6,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tinggi badan',
          'value': '155',
          suffix: 'cm',
          'required': true,
          'order': 7,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Lila',
          'value': '25',
          suffix: 'cm',
          'required': true,
          'order': 8,
          'group': 1,
          'layout': 'full'
        }),
        
        new TextboxQuestion({
          'key': '',
          'label': 'Alamat',
          'value': 'Sentani, Kabupaten Jayapura',
          'required': true,
          'order': 9,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'RT',
          'value': '12',
          'required': true,
          'order': 9,
          'group': 1,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'RW',
          'value': '003',
          'required': true,
          'order': 10,
          'group': 1,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Desa',
          'value': 'Desa Dobonsolo',
          'required': true,
          'order': 11,
          'group': 1,
          'layout': 'third'
        }),
        
        new TextboxQuestion({
          'key': '',
          'label': 'Dasa Wisma',
          'value': '',
          'required': true,
          'order': 12,
          'group': 1,
          'layout': 'half'
        }),
        
        new TextboxQuestion({
          'key': '',
          'label': 'Posyandu',
          'value': 'Dobonsolo',
          'required': true,
          'order': 13,
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Puskesmas',
          'value': 'Kampung Harapan Sentani',
          'required': true,
          'order': 14,
          'group': 1,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'ANAK',
          'value': '',
          'required': true,
          'order': 15,
          'group': 2,
          'layout': 't1'
        }),

        new LinkTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [
              ['Nama', 'Umur', 'Kondisi']
            ],
            [
              [['Maria Magai',102],[3,''],['Baik','']],
              [['Simon Magai',101],[1,''],['Baik','']]
            ]
          ],
          'required': true,
          'order': 15.5,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'FORMULIR KESEHATAN',
          'value': '',
          'required': true,
          'order': 16,
          'group': 3,
          'layout': 't1'
        }),

        new ListQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            ['Kehamilan tanggal 2/2/2015',2,2],
            ['Kehamilan tanggal 4/1/2017',3,3]
          ],
          'required': true,
          'order': 17,
          'group': 3,
          'layout': ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 102) {
      const questions: QuestionBase<any>[] = [
        new Title({
          'key': '',
          'label': 'KARTU KEHAMILAN',
          'value': '',
          'required': true,
          'order': 0,
          'group': 0,
          'layout': 't1'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Kehamilan tanggal',
          'value': '4 Januari 2017',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'A. PENGAMATAN KEHAMILAN ANAMNESIS',
          'value': '',
          'required': true,
          'order': 2,
          'group': 2,
          'layout': 't1'
        }),

        new Title({
          'key': '',
          'label': 'FUNGSI REPRODUKSI',
          'value': '',
          'required': true,
          'order': 3,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Hari pertama haid terakhir (HPHT)',
          'value': '1 Mei 2016',
          'required': true,
          'order': 4,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Hari taksiran persalinan (HTP)',
          'value': '8 Februari 2017',
          'required': true,
          'order': 5,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Kehamilan sekarang',
          'value': 'usia kehamilan 34 minggu',
          'required': true,
          'order': 6,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Keluhan utama',
          'value': 'Kaki bengkak sejak 10 November 2016, riwayat Hipertensi (-)',
          'required': true,
          'order': 7,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'RIWAYAT OBSTETRI',
          'value': '',
          'required': true,
          'order': 8,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'G',
          'value': '2',
          'required': true,
          'order': 9,
          'group': 2,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'P',
          'value': '1',
          'required': true,
          'order': 10,
          'group': 2,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'A',
          'value': '0',
          'required': true,
          'order': 11,
          'group': 2,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jumlah anak hidup',
          'value': '1',
          'required': true,
          'order': 12,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jumlah lahir mati',
          'value': '0',
          'required': true,
          'order': 13,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jarak persalinan terakhir',
          'value': '2',
          suffix: 'tahun',
          'required': true,
          'order': 14,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Penolong persalinan terakhir (sebutkan)',
          'value': 'Bidan Sarce',
          'required': true,
          'order': 15,
          'group': 2,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Cara persalinan yang lalu',
          'value': '0',
          'options': [{'key': '0', 'value': 'Spontan'}, {'key': '1', 'value': 'Buatan'}],
          'order': 16,
          'group': 2,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jika buatan, sebutkan',
          'value': '',
          'required': true,
          'order': 17,
          'group': 2,
          'layout': 'full subq'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Penggunaan kontrasepsi sebelum kehamilan ini (sebutkan)',
          'value': 'Tidak pakai KB',
          'required': true,
          'order': 18,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'RESIKO TINGGI',
          'value': '',
          'required': true,
          'order': 19,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Ditemukan tanggal',
          'value': '',
          'required': true,
          'order': 20,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jenis resiko',
          'value': '',
          'required': true,
          'order': 21,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'RUJUK',
          'value': '',
          'required': true,
          'order': 22,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk tanggal',
          'value': '',
          'required': true,
          'order': 23,
          'group': 2,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jam',
          'value': '',
          'required': true,
          'order': 24,
          'group': 2,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk ke',
          'value': '',
          'required': true,
          'order': 25,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan sementara',
          'value': '',
          'required': true,
          'order': 26,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'PEMERIKSAAN ANTENATAL',
          'value': '',
          'required': true,
          'order': 27,
          'group': 2,
          'layout': 't2'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [
              ['Tanggal', 'Keluhan Sekarang', 'Tekanan Darah (MMHG)', 'Berat Badan (KG)', 'Umur Kehamilan (Minggu)', 'Tinggi Findus (cm)', 'Letak Janin KOP/S U/LI', 'Denyut Jantung Janin', 'Lab', 'Pemeriksaan Khusus', 'Tindakan dan Terapi TT/TO/Lain-lain', 'Paraf']
            ],
            [
              ['12/07/2016','-','120/70','57 kg','10','ttb','-','-','-','-','Fe, Asam Folat','A'],
              ['16/11/2016','-','120/70','62 kg','26','24 cm','Lintang','148 x/menit','Hb: 10 GDS: 128','-','Fe, Asam Folat','A'],
              ['5/12/2016','Punggung pegal-pegal','130/80','63 kg','30','29.5 cm','Kepala','145 x/menit','-','-','Fe, Asam Folat','A'],
              ['22/12/2016','Kaki bengkak (+), punggung pegal2','130/80','63.5 kg','32','30 cm','Kepala','140 x/menit','Urin Protein (-)','-','Fe, Asam Folat','A'],
              ['4/1/2017','Kaki bengkak (+), nyeri kepala (-)','130/80','64 kg','34','31 cm','Kepala','140 x/menit','Urin Protein (-)','-','Fe, Asam Folat','A'],
            ]
          ],
          'required': true,
          'order': 28,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'B. PENGAMATAN PERSALINAN',
          'value': '',
          'required': true,
          'order': 28,
          'group': 3,
          'layout': 't1'
        }),

        new Title({
          'key': '',
          'label': 'PEMERIKSAAN DALAM',
          'value': '',
          'required': true,
          'order': 29,
          'group': 3,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Porsio',
          'value': 'Lunak, tebal',
          'required': true,
          'order': 30,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Presentasi',
          'value': 'Kepala',
          'required': true,
          'order': 31,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Pembukuan',
          'value': '2',
          suffix: 'cm',
          'required': true,
          'order': 32,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Posisi',
          'value': 'Flexi',
          'required': true,
          'order': 33,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Ketuban',
          'value': 'selaput ketuban (+), ketuban (-)',
          'required': true,
          'order': 34,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Penurunan bagian terendah',
          'value': 'Occiput(Ubun-ubun kecil)',
          'required': true,
          'order': 35,
          'group': 3,
          'layout': 'half'
        }),

        new Title({
          'key': '',
          'label': 'PEMANTAUAN',
          'value': '',
          'required': true,
          'order': 36,
          'group': 3,
          'layout': 't2'
        }),

        new ComplexTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [
              [['Tanggal dan Jam',1], ['Tekanan Darah (mm/Hg)',1], ['Nadi (/min)',1], ['Nafas',1], ['Suhu (C)',1], ['HIS',4], ['OJJ',2], ['Hasil Pemeriksaan Dalam',1], ['Paraf',1]],
              [['',1],['',1],['',1],['',1],['',1],['',1],['FRLK',1],['Lama',1],['Kuat',1],['FRLK',1],['Teratus',1],['',1],['',1]]
            ],
            [
              [['09/02/2017 Pk.18:00',1],['130/80',1],['84',1],['22',1],['37',1],['',1],['1x/10”',1],['20’',1],['Lemah',1],['145',1],['Ya',1],['Bukaan: 2 cm <br /> Portio: Lunak, tebal <br /> Selaput ketuban (+) <br /> Kala: 1 laten',1],['A',1]],
              [['Pk. 22:00',1],['130/80',1],['90',1],['24',1],['-',1],['',1],['3x/10”',1],['20’',1],['Sedang',1],['140',1],['Ya',1],['Bukaan: 4 cm <br /> Portio: Lunak, tebal <br /> Ketuban (+), jernih <br /> Kala: 1 aktif',1],['A',1]],
              [['10/02/2017 Pk. 00:00',1],['130/80',1],['80',1],['20',1],['37',1],['',1],['4x/10”',1],['30’',1],['Sedang',1],['148',1],['Ya',1],['Bukaan: 6 cm <br /> Portio: Lunak, tipis <br /> Kala: 1 aktif',1],['A',1]],
              [['Pk. 01:00',1],['130/80',1],['90',1],['24',1],['-',1],['',1],['4x/10”',1],['35’',1],['Kuat',1],['146',1],['Ya',1],['Bukaan: 8 cm <br /> Portio: Lunak, mendatar <br /> Kala: 1 aktif',1],['A',1]],
              [['Pk. 02:00',1],['130/80',1],['84',1],['24',1],['-',1],['',1],['5x/10”',1],['40’',1],['Kuat',1],['148',1],['Ya',1],['Bukaan lengkap <br /> Portio tidak teraba Meneran (+), Anus dilatasi <br /> Kala: 2 <br /> Memimpin persalinan',1],['A',1]],
              [['Pk. 04:12',1],['130/80',1],['80',1],['24',1],['37',1],['',1],['3x/10”',1],['40’',1],['Sedang',1],['-',1],['-',1],['Bayi lahir (laki2), kala : 3',1],['A',1]],
              [['Pk. 04:30',1],['-',1],['80',1],['-',1],['-',1],['',1],['2x/10”',1],['20’',1],['Lemah',1],['-',1],['-',1],['Plasenta lengkap (+), perdarahan (+) 200cc',1],['A',1]],
            ]
          ],
          'required': true,
          'order': 37,
          'group': 3,
          'layout': ''
        }),

        new Title({
          'key': '',
          'label': 'PEMERIKSAAN KALA III DAN IV',
          'value': '',
          'required': true,
          'order': 38,
          'group': 3,
          'layout': 't2'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Plasenta',
          'value': '0',
          'options': [{'key': '0', 'value': 'Lengkap'}, {'key': '1', 'value': 'Tidak Lengkap'}],
          'order': 39,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan',
          'value': '',
          'required': true,
          'order': 40,
          'group': 3,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Kontraksi Rahim',
          'value': '0',
          'options': [{'key': '0', 'value': 'Baik'}, {'key': '1', 'value': 'Buruk'}],
          'order': 41,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan',
          'value': '',
          'required': true,
          'order': 42,
          'group': 3,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Perdarahan',
          'value': '1',
          'options': [{'key': '0', 'value': 'Sedikit'}, {'key': '1', 'value': 'Banyak'}],
          'order': 43,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan',
          'value': 'Konsultasi: Misoprostol 400mg inisial, dilanjutkan Misoprostol 400 mg setelah 2 jam + Infus Ringer Lactate kecepatan 20-40 tetes/menit, perdarahan teratasi pk. 05:30',
          'required': true,
          'order': 44,
          'group': 3,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'KESIMPULAN AKHIR PERSALINAN',
          'value': '',
          'required': true,
          'order': 45,
          'group': 3,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Persalinan tanggal',
          'value': '10 Februari 2017',
          'required': true,
          'order': 46,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jam',
          'value': '04:12',
          'required': true,
          'order': 47,
          'group': 3,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Cara persalinan',
          'value': '0',
          'options': [{'key': '0', 'value': 'Spontan'}, {'key': '1', 'value': 'Buatan'}],
          'order': 48,
          'group': 3,
          'layout': '1row'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadaan bayi',
          'value': '0',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Lahir mati'}],
          'order': 49,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Berat badan bayi',
          'value': '3000',
          suffix: 'gram',
          'required': true,
          'order': 50,
          'group': 3,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Warna',
          'value': 'Pink',
          suffix: 'gram',
          'required': true,
          'order': 51,
          'group': 3,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Jenis kelamin',
          'value': '0',
          'options': [{'key': '0', 'value': 'Laki-laki'}, {'key': '1', 'value': 'Perempuan'}],
          'order': 52,
          'group': 3,
          'layout': '1row'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadan ibu',
          'value': '0',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Meninggal'}],
          'order': 53,
          'group': 3,
          'layout': '1row'
        }),

        new Title({
          'key': '',
          'label': 'C. PENGAMATAN NIFAS',
          'value': '',
          'required': true,
          'order': 54,
          'group': 4,
          'layout': 't1'
        }),

        new Title({
          'key': '',
          'label': 'PENGAMATAN',
          'value': '',
          'required': true,
          'order': 55,
          'group': 4,
          'layout': 't2'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [['Tanggal dan Jam', 'Anamnesis', 'Tekanan Darah (MMHG)', 'Nadi (/mml)', 'Nafas (/mml)', 'Suhu (C)', 'Kontraksi Rahim', 'Perdarahan', 'Lochia', 'BAB', 'BAK', 'Menyusui Dini', 'Terapi dan Tindakan', 'Paraf']],
            [
              ['10/02/2017 Pk. 04:30','Bayi lahir pk.04:12, laki-laki, APGAR: 9/10 Ibu Compos Mentis (CM)','130/80','100','24','37','2x/10”','200cc','-','-','-','Ditunda','Misoprostol 400mg insial + Resusitasi cairan Ringer Lactate (RL) 20-40 tetes/menit','A'],
              ['Pk. 05:30','Lemah','130/80','90','24','37','1-2x/10”','0','-','-','+','Menyusui dini','RL 10-20 tetes/menit','A'],
              ['Pk. 10:00','Baik','120/70','80','20','37','-','-','-','+','+','','Infus lepas, makan & minum mandiri','A'],
              ['11/02/2017 Pk.10:00','Baik','120/70','80','20','37','-','-','-','+','+','','Pasien boleh pulang (BLPL)','A']
            ]
          ],
          'required': true,
          'order': 56,
          'group': 4,
          'layout': ''
        }),

        new Title({
          'key': '',
          'label': 'KESIMPULAN AKHIR NIFAS',
          'value': '',
          'required': true,
          'order': 57,
          'group': 4,
          'layout': 't2'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadaan bayi',
          'value': '0',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Meninggal'}],
          'order': 58,
          'group': 4,
          'layout': '1row'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadaan ibu',
          'value': '0',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Meninggal'}],
          'order': 59,
          'group': 4,
          'layout': '1row'
        }),

        new Title({
          'key': '',
          'label': 'RUJUK',
          'value': '',
          'required': true,
          'order': 60,
          'group': 4,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk tanggal',
          'value': '',
          'required': true,
          'order': 61,
          'group': 4,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jam',
          'value': '',
          'required': true,
          'order': 62,
          'group': 4,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk ke',
          'value': '',
          'required': true,
          'order': 63,
          'group': 4,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan sementara',
          'value': '',
          'required': true,
          'order': 64,
          'group': 4,
          'layout': 'full'
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 101) {
      const questions: QuestionBase<any>[] = [
        new Title({
          'key': '',
          'label': 'KARTU KEHAMILAN',
          'value': '',
          'required': true,
          'order': 0,
          'group': 0,
          'layout': 't1'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Kehamilan tanggal',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'A. PENGAMATAN KEHAMILAN ANAMNESIS',
          'value': '',
          'required': true,
          'order': 2,
          'group': 2,
          'layout': 't1'
        }),

        new Title({
          'key': '',
          'label': 'FUNGSI REPRODUKSI',
          'value': '',
          'required': true,
          'order': 3,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Hari pertama haid terakhir (HPHT)',
          'value': '',
          'required': true,
          'order': 4,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Hari taksiran persalinan (HTP)',
          'value': '',
          'required': true,
          'order': 5,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Kehamilan sekarang',
          'value': '',
          'required': true,
          'order': 6,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Keluhan utama',
          'value': '',
          'required': true,
          'order': 7,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'RIWAYAT OBSTETRI',
          'value': '',
          'required': true,
          'order': 8,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'G',
          'value': '',
          'required': true,
          'order': 9,
          'group': 2,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'P',
          'value': '',
          'required': true,
          'order': 10,
          'group': 2,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'A',
          'value': '',
          'required': true,
          'order': 11,
          'group': 2,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jumlah anak hidup',
          'value': '',
          'required': true,
          'order': 12,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jumlah lahir mati',
          'value': '',
          'required': true,
          'order': 13,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jarak persalinan terakhir',
          'value': '',
          'required': true,
          'order': 14,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Penolong persalinan terakhir (sebutkan)',
          'value': '',
          'required': true,
          'order': 15,
          'group': 2,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Cara persalinan yang lalu',
          'value': '0',
          'options': [{'key': '0', 'value': 'Spontan'}, {'key': '1', 'value': 'Buatan'}],
          'order': 16,
          'group': 2,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jika buatan, sebutkan',
          'value': '',
          'required': true,
          'order': 17,
          'group': 2,
          'layout': 'full subq'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Penggunaan kontrasepsi sebelum kehamilan ini (sebutkan)',
          'value': '',
          'required': true,
          'order': 18,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'RESIKO TINGGI',
          'value': '',
          'required': true,
          'order': 19,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Ditemukan tanggal',
          'value': '',
          'required': true,
          'order': 20,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jenis resiko',
          'value': '',
          'required': true,
          'order': 21,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'RUJUK',
          'value': '',
          'required': true,
          'order': 22,
          'group': 2,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk tanggal',
          'value': '',
          'required': true,
          'order': 23,
          'group': 2,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jam',
          'value': '',
          'required': true,
          'order': 24,
          'group': 2,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk ke',
          'value': '',
          'required': true,
          'order': 25,
          'group': 2,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan sementara',
          'value': '',
          'required': true,
          'order': 26,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'PEMERIKSAAN ANTENATAL',
          'value': '',
          'required': true,
          'order': 27,
          'group': 2,
          'layout': 't2'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [
              ['Tanggal', 'Keluhan Sekarang', 'Tekanan Darah (MMHG)', 'Berat Badan (KG)', 'Umur Kehamilan (Minggu)', 'Tinggi Findus (cm)', 'Letak Janin KOP/S U/LI', 'Denyut Jantung Janin', 'Lab', 'Pemeriksaan Khusus', 'Tindakan dan Terapi TT/TO/Lain-lain', 'Paraf']
            ],
            [
              ['','','','','','','','','','','',''],
              ['','','','','','','','','','','',''],
              ['','','','','','','','','','','',''],
              ['','','','','','','','','','','',''],
              ['','','','','','','','','','','',''],
            ]
          ],
          'required': true,
          'order': 28,
          'group': 2,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'B. PENGAMATAN PERSALINAN',
          'value': '',
          'required': true,
          'order': 28,
          'group': 3,
          'layout': 't1'
        }),

        new Title({
          'key': '',
          'label': 'PEMERIKSAAN DALAM',
          'value': '',
          'required': true,
          'order': 29,
          'group': 3,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Porsio',
          'value': '',
          'required': true,
          'order': 30,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Presentasi',
          'value': '',
          'required': true,
          'order': 31,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Pembukuan',
          'value': '',
          'required': true,
          'order': 32,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Posisi',
          'value': '',
          'required': true,
          'order': 33,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Ketuban',
          'value': '',
          'required': true,
          'order': 34,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Penurunan bagian terendah',
          'value': '',
          'required': true,
          'order': 35,
          'group': 3,
          'layout': 'half'
        }),

        new Title({
          'key': '',
          'label': 'PEMANTAUAN',
          'value': '',
          'required': true,
          'order': 36,
          'group': 3,
          'layout': 't2'
        }),

        new ComplexTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
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
          'required': true,
          'order': 37,
          'group': 3,
          'layout': ''
        }),

        new Title({
          'key': '',
          'label': 'PEMERIKSAAN KALA III DAN IV',
          'value': '',
          'required': true,
          'order': 38,
          'group': 3,
          'layout': 't2'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Plasenta',
          'value': '1',
          'options': [{'key': '0', 'value': 'Lengkap'}, {'key': '1', 'value': 'Tidak Lengkap'}],
          'order': 39,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan',
          'value': '',
          'required': true,
          'order': 40,
          'group': 3,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Kontraksi Rahim',
          'value': '0',
          'options': [{'key': '0', 'value': 'Baik'}, {'key': '1', 'value': 'Buruk'}],
          'order': 41,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan',
          'value': '',
          'required': true,
          'order': 42,
          'group': 3,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Perdarahan',
          'value': '1',
          'options': [{'key': '0', 'value': 'Sedikit'}, {'key': '1', 'value': 'Banyak'}],
          'order': 43,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan',
          'value': '',
          'required': true,
          'order': 44,
          'group': 3,
          'layout': 'full'
        }),

        new Title({
          'key': '',
          'label': 'KESIMPULAN AKHIR PERSALINAN',
          'value': '',
          'required': true,
          'order': 45,
          'group': 3,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Persalinan tanggal',
          'value': '',
          'required': true,
          'order': 46,
          'group': 3,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jam',
          'value': '',
          'required': true,
          'order': 47,
          'group': 3,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Cara persalinan',
          'value': '1',
          'options': [{'key': '0', 'value': 'Spontan'}, {'key': '1', 'value': 'Buatan'}],
          'order': 48,
          'group': 3,
          'layout': '1row'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadaan bayi',
          'value': '2',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Lahir mati'}],
          'order': 49,
          'group': 3,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Berat badan bayi',
          'value': '',
          suffix: 'gram',
          'required': true,
          'order': 50,
          'group': 3,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Warna',
          'value': '',
          suffix: 'gram',
          'required': true,
          'order': 51,
          'group': 3,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Jenis kelamin',
          'value': '0',
          'options': [{'key': '0', 'value': 'Laki-laki'}, {'key': '1', 'value': 'Perempuan'}],
          'order': 52,
          'group': 3,
          'layout': '1row'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadan ibu',
          'value': '2',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Meninggal'}],
          'order': 53,
          'group': 3,
          'layout': '1row'
        }),

        new Title({
          'key': '',
          'label': 'C. PENGAMATAN NIFAS',
          'value': '',
          'required': true,
          'order': 54,
          'group': 4,
          'layout': 't1'
        }),

        new Title({
          'key': '',
          'label': 'PENGAMATAN',
          'value': '',
          'required': true,
          'order': 55,
          'group': 4,
          'layout': 't2'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [['Tanggal dan Jam', 'Anamnesis', 'Tekanan Darah (MMHG)', 'Nadi (/mml)', 'Nafas (/mml)', 'Suhu (C)', 'Kontraksi Rahim', 'Perdarahan', 'Lochia', 'BAB', 'BAK', 'Menyusui Dini', 'Terapi dan Tindakan', 'Paraf']],
            [
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
              ['','','','','','','','','','','','','',''],
            ]
          ],
          'required': true,
          'order': 56,
          'group': 4,
          'layout': ''
        }),

        new Title({
          'key': '',
          'label': 'KESIMPULAN AKHIR NIFAS',
          'value': '',
          'required': true,
          'order': 57,
          'group': 4,
          'layout': 't2'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadaan bayi',
          'value': '1',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Meninggal'}],
          'order': 58,
          'group': 4,
          'layout': '1row'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Keadaan ibu',
          'value': '1',
          'options': [{'key': '0', 'value': 'Sehat'}, {'key': '1', 'value': 'Sakit'}, {'key': '2', 'value': 'Meninggal'}],
          'order': 59,
          'group': 4,
          'layout': '1row'
        }),

        new Title({
          'key': '',
          'label': 'RUJUK',
          'value': '',
          'required': true,
          'order': 60,
          'group': 4,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk tanggal',
          'value': '',
          'required': true,
          'order': 61,
          'group': 4,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jam',
          'value': '',
          'required': true,
          'order': 62,
          'group': 4,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Dirujuk ke',
          'value': '',
          'required': true,
          'order': 63,
          'group': 4,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tindakan sementara',
          'value': '',
          'required': true,
          'order': 64,
          'group': 4,
          'layout': 'full'
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 103) {
      const questions: QuestionBase<any>[] = [
        
        new Title({
          'key': '',
          'label': 'IDENTITAS',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 't1'
        }),

        new TextboxQuestion({
          'key': '1.',
          'label': 'No. Registrar',
          'value': '123-458',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '2.',
          'label': 'Nama anak',
          'value': 'SIMON MAGAI',
          'required': true,
          'order': 3, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '3.',
          'label': 'Tanggal lahir',
          'value': '02/10/2017',
          'required': true,
          'order': 3.5,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '4.',
          'label': 'Umur',
          'value': '1',
          suffix: 'tahun',
          'required': true,
          'order': 4, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '5.',
          'label': 'Alamat',
          'value': 'Sentani, Jayapura',
          'required': true,
          'order': 5, 
          'group': 1,
          'layout': 'full'
        }),
        
        new TextboxQuestion({
          'key': '6a.',
          'label': 'RT',
          'value': '12',
          'required': true,
          'order': 6, 
          'group': 1,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '6b.',
          'label': 'RW',
          'value': '003',
          'required': true,
          'order': 7, 
          'group': 1,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '6c.',
          'label': 'Desa',
          'value': 'Dobonsolo',
          'required': true,
          'order': 8, 
          'group': 1,
          'layout': 'third'
        }),

      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 104) {
      const questions: QuestionBase<any>[] = [
        new ComplexTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [
              [['Umur (bln)',1], [0,1], [1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [10,1], [11,1], [12,1], [13,1], [14,1], [15,1], [16,1], [17,1], [18,1], [19,1], [20,1], [21,1], [22,1], [23,1], [24,1]]
            ],
            [
              [['Bulan timbangan',-1],['03/02/2017',1],['03/03/2017',1],['03/04/2017',1],['03/05/2017',1],['03/06/2017',1],['',1],['03/08/2017',1],['',1],['03/10/2017',1],['03/11/2017',1],['03/12/2017',1],['',1],['03/02/2018',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['BB (kg)',-1],['3',1],['4',1],['5',1],['5.5',1],['6',1],['',1],['7',1],['',1],['7.5',1],['8',1],['8.2',1],['',1],['8.5',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['KBM (gr)',-1],[200,-25]],
              [['N/T',-1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]]
            ]
          ],
          'required': true,
          'order': 37,
          'group': 3,
          'layout': ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 105) {
      const questions: QuestionBase<any>[] = [
        new Title({
          'key': '',
          'label': 'FORMULIR KESEHATAN',
          'value': '',
          'required': true,
          'order': 9,
          'group': 2,
          'layout': 't1'
        }),

        new ListQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            ['Keterangan Waktu Kelahiran tanggal 10 Feb 2017', 5, 4],
            ['Keterangan Imunisasi', 6, 5],
            ['Anamnesis – Campak', 7, 13]
          ],
          'required': true,
          'order': 10,
          'group': 2,
          'layout': ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 106) {
      const questions: QuestionBase<any>[] = [
        
        new Title({
          'key': '',
          'label': 'KETERANGAN WAKTU KELAHIRAN',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 't1'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tanggal lahir',
          'value': '10 Februari 2017',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tempat kelahiran',
          'value': 'Puskesmas Kampung Harapan',
          'required': true,
          'order': 3, 
          'group': 1,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Cara kelahiran',
          'value': '0',
          'options': [{'key': '0', 'value': 'Spontan'}, {'key': '1', 'value': 'SC/Vakum'}],
          'order': 4,
          'group': 1,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jika SC/Vakum, sebutkan',
          'value': '',
          'required': true,
          'order': 5, 
          'group': 1,
          'layout': 'full subq'
        }),

        new Title({
          'key': '',
          'label': 'Berat badan waktu lahir',
          'value': '',
          'required': true,
          'order': 6,
          'group': 1,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'BBL',
          'value': '3100',
          suffix: 'gr',
          'required': true,
          'order': 7, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': '/ PB',
          'value': '47',
          suffix: 'cm',
          'required': true,
          'order': 8, 
          'group': 1,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Jenis kelamin',
          'value': '',
          'options': [{'key': '0', 'value': 'Laki-laki'}, {'key': '1', 'value': 'Perempuan'}],
          'order': 9,
          'group': 1,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Nama ayah',
          'value': 'OKTAVIANUS MAGAI',
          'required': true,
          'order': 10, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Pekerjaan ayah',
          'value': 'BURUH',
          'required': true,
          'order': 11, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Suku',
          'value': 'WAMESA',
          'required': true,
          'order': 12, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Nama ibu',
          'value': 'YEMIMA TABUNI',
          'required': true,
          'order': 13, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Pekerjaan ibu',
          'value': 'BERTANI',
          'required': true,
          'order': 14, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Suku',
          'value': 'WAMESA',
          'required': true,
          'order': 15, 
          'group': 1,
          'layout': 'half'
        })
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 107) {
      const questions: QuestionBase<any>[] = [

        new Title({
          'key': '',
          'label': 'KETERANGAN IMUNISASI',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 't1'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [['Imunisasi', 'Tanggal', 'Tanggal', 'Tanggal', 'Tanggal', 'Tanggal', 'Keterangan']],
            [
              ['BCG','03/03/2017','','','','',''],
              ['Campak','03/11/2017','','','','',''],
              ['DPT','03/03/2017','03/04/2017','03/05/2017','03/06/2017','',''],
              ['POLIO','03/03/2017','03/04/2017','03/05/2017','03/06/2017','',''],
              ['Hepatitis','10/02/2017','03/03/2017','03/04/2017','03/05/2017','03/06/2017',''],
            ]
          ],
          'required': true,
          'order': 2,
          'group': 1,
          'layout': ''
        }),

        new Title({
          'key': '',
          'label': 'BOOSTER. HIB. CAMPAK',
          'value': '',
          'required': true,
          'order': 3,
          'group': 1,
          'layout': 't2'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [['Tanggal', 'Umur', 'Berat Badan', 'Makanan Anak', 'Gejala', 'Keterangan']],
            [
              ['03/03/2017','1 bln','4','ASI','-','-'],
              ['03/04/2017','2 bln','5','ASI','-','-'],
              ['03/05/2017','3 bln','5.5','ASI','-','-'],
              ['03/06/2017','4 bln','6','','-','-'],
              ['03/08/2017','6 bln','7','ASI + MP ASI','-','-'],
              ['03/10/2017','8 bln','7.5','ASI + MP ASI','Gatal-gatal','CTM ½ tablet puyer'],
              ['03/11/2017','9 bln','8','ASI + MP ASI','-','-'],
              ['03/12/2017','10 bln','8.2','ASI + MP ASI','-','-'],
              ['03/02/2018','12 bln','8.5','ASI + MP ASI','-','-'],
            ]
          ],
          'required': true,
          'order': 4,
          'group': 1,
          'layout': ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 108) {
      const questions: QuestionBase<any>[] = [
        
        new Title({
          'key': '',
          'label': 'IDENTITAS',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 't1'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'No. Registrar',
          'value': '123-459',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Nama anak',
          'value': 'MARIA MAGAI',
          'required': true,
          'order': 3, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tanggal lahir',
          'value': '02/03/2015',
          'required': true,
          'order': 3.5,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Umur',
          'value': '3',
          suffix: 'tahun',
          'required': true,
          'order': 4, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Alamat',
          'value': 'Sentani, Jayapura',
          'required': true,
          'order': 5, 
          'group': 1,
          'layout': 'full'
        }),
        
        new TextboxQuestion({
          'key': '',
          'label': 'RT',
          'value': '12',
          'required': true,
          'order': 6, 
          'group': 1,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'RW',
          'value': '003',
          'required': true,
          'order': 7, 
          'group': 1,
          'layout': 'third'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Desa',
          'value': 'Dobonsolo',
          'required': true,
          'order': 8, 
          'group': 1,
          'layout': 'third'
        }),

      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 109) {
      const questions: QuestionBase<any>[] = [
        new ComplexTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [
              [['Umur (bln)',1], [24,1], [25,1], [26,1], [27,1], [28,1], [29,1], [30,1], [31,1], [32,1], [33,1], [34,1], [35,1], [36,1], [37,1], [38,1], [39,1], [40,1], [41,1], [42,1], [43,1], [44,1], [45,1], [46,1], [47,1], [48,1]]
            ],
            [
              [['Bulan timbangan',-1],['',1],['03/04/2017',1],['',1],['',1],['03/07/2017',1],['',1],['',1],['03/10/2017',1],['',1],['03/12/2017',1],['',1],['03/01/2018',1],['',1],['03/03/2018',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['BB (kg)',-1],['',1],['9',1],['',1],['',1],['9.5',1],['',1],['',1],['10',1],['',1],['10.2',1],['',1],['10',1],['',1],['10',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]],
              [['KBM (gr)',-1],[200,-25]],
              [['N/T',-1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1],['',1]]
            ]
          ],
          'required': true,
          'order': 37,
          'group': 3,
          'layout': ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 110) {
      const questions: QuestionBase<any>[] = [
        new Title({
          'key': '',
          'label': 'FORMULIR KESEHATAN',
          'value': '',
          'required': true,
          'order': 9,
          'group': 2,
          'layout': 't1'
        }),

        new ListQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            ['Keterangan Waktu Kelahiran tanggal 02 Maret 2015', 5, 4],
            ['Keterangan Imunisasi', 6, 5]
          ],
          'required': true,
          'order': 10,
          'group': 2,
          'layout': ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 111) {
      const questions: QuestionBase<any>[] = [
        
        new Title({
          'key': '',
          'label': 'KETERANGAN WAKTU KELAHIRAN',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 't1'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tanggal lahir',
          'value': '02/03/2015',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Tempat kelahiran',
          'value': 'Puskesmas Kampung Harapan',
          'required': true,
          'order': 3, 
          'group': 1,
          'layout': 'full'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Cara kelahiran',
          'value': '',
          'options': [{'key': '0', 'value': 'Spontan'}, {'key': '1', 'value': 'SC/Vakum'}],
          'order': 4,
          'group': 1,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Jika SC/Vakum, sebutkan',
          'value': '',
          'required': true,
          'order': 5, 
          'group': 1,
          'layout': 'full subq'
        }),

        new Title({
          'key': '',
          'label': 'Berat badan waktu lahir',
          'value': '',
          'required': true,
          'order': 6,
          'group': 1,
          'layout': 't2'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'BBL',
          'value': '3200',
          suffix: 'gr',
          'required': true,
          'order': 7, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': '/ PB',
          'value': '47',
          suffix: 'cm',
          'required': true,
          'order': 8, 
          'group': 1,
          'layout': 'half'
        }),

        new CheckboxQuestion({
          'key': '',
          'label': 'Jenis kelamin',
          'value': '1',
          'options': [{'key': '0', 'value': 'Laki-laki'}, {'key': '1', 'value': 'Perempuan'}],
          'order': 9,
          'group': 1,
          'layout': '1row'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Nama ayah',
          'value': 'OKTAVIANUS MAGAI',
          'required': true,
          'order': 10, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Pekerjaan ayah',
          'value': 'BURUH',
          'required': true,
          'order': 11, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Suku',
          'value': 'WAMESA',
          'required': true,
          'order': 12, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Nama ibu',
          'value': 'YEMIMA TABUNI',
          'required': true,
          'order': 13, 
          'group': 1,
          'layout': 'full'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Pekerjaan ibu',
          'value': 'BERTANI',
          'required': true,
          'order': 14, 
          'group': 1,
          'layout': 'half'
        }),

        new TextboxQuestion({
          'key': '',
          'label': 'Suku',
          'value': 'WAMESA',
          'required': true,
          'order': 15, 
          'group': 1,
          'layout': 'half'
        })
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 112) {
      const questions: QuestionBase<any>[] = [

        new Title({
          'key': '',
          'label': 'KETERANGAN IMUNISASI',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 't1'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [['Imunisasi', 'Tanggal', 'Tanggal', 'Tanggal', 'Tanggal', 'Tanggal', 'Keterangan']],
            [
              ['BCG','03/04/2015','','','','',''],
              ['Campak','-','','','','',''],
              ['DPT','03/04/2015','03/05/2015','03/06/2015','03/07/2015','',''],
              ['POLIO','03/04/2015','03/05/2015','03/06/2015','03/07/2015','',''],
              ['Hepatitis','02/03/2015','03/05/2015','03/06/2015','03/07/2015','',''],
            ]
          ],
          'required': true,
          'order': 2,
          'group': 1,
          'layout': ''
        }),

        new Title({
          'key': '',
          'label': 'BOOSTER. HIB. CAMPAK',
          'value': '',
          'required': true,
          'order': 3,
          'group': 1,
          'layout': 't2'
        }),

        new SimpleTableQuestion({
          'key': '',
          'label': '',
          'value': '',
          'contents': [
            [['Tanggal', 'Umur', 'Berat Badan', 'Makanan Anak', 'Gejala', 'Keterangan']],
            [
              ['03/04/2015','1 bln','4','ASI','-','-'],
              ['03/05/2015','2 bln','5','ASI','-','-'],
              ['03/06/2015','3 bln','5.5','ASI','-','-'],
              ['03/07/2015','4 bln','6','ASI','','-'],
              ['03/04/2017','25 bln','9','Makan biasa','-','-'],
              ['03/07/2017','28 bln','9.5','Makan biasa','-','-'],
              ['03/10/2017','31 bln','10','Makan biasa','-','-'],
              ['03/12/2017','33 bln','10.2','Makan biasa','-','-'],
              ['03/01/2018','35 bln','10','Makan biasa','Berat menurun','Z-score <-3 <br /> Gizi Buruk'],
              ['03/03/2018','37 bln','10','Makan biasa','Berat tidak naik','Z-score <-3 <br /> Gizi Buruk'],
            ]
          ],
          'required': true,
          'order': 4,
          'group': 1,
          'layout': ''
        }),
      ];
      return questions.sort((a, b) => a.order - b.order);
    } else if (id === 113) {
      const questions: QuestionBase<any>[] = [

        new Title({
          'key': '',
          'label': 'Anamnesis – Campak',
          'value': '',
          'required': true,
          'order': 1,
          'group': 1,
          'layout': 't1'
        }),

        new FreeText({
          'key': '',
          'label': '',
          'value': '',
          'contents': 'Keluhan Utama: Ruam-ruam <br /> Riwayat Penyakit Sekarang:  <br /> - Ruam- ruam di seluruh tubuh.  <br /> - Muncul pertama kali di daerah wajah, kemudian badan, tangan dan kaki.  <br /> - Ruam bagian tangan dan kaki lebih jarang daripada yang di badan.  <br /> - Sejak pagi nampak lemah dan malas bermain.  <br /> - Demam (+) 38 Celcius, batuk kering (+), BAB cair + ampas, lendir (-) darah (-) kurang lebih 4x sejak masuk.  <br /> - Buang air kecil lancar seperti biasa.',
          'required': true,
          'order': 2,
          'group': 1,
          'layout': ''
        }),

        new FreeText({
          'key': '',
          'label': '',
          'value': '',
          'contents': 'Riwayat Penyakit Sekarang (lanjutan):  <br /> - Empat hari yang lalu, anak tiba-tiba panas tinggi, sore hari berobat ke dukun, namun anak masih demam tinggi.  <br /> - Tiga hari yang lalu, anak diare cair + ampas, lendir (-) , darah (-) sebanyak 3x/ hari, muntah 1x , batuk kering (+).  <br /> - Riwayat imunisasi : belum pernah  <br />  <br /> Riwayat Penyakit Dahulu:  <br /> - Pasien tidak pernah mengalami penyakit seperti ini sebelumnya  <br /> - Riwayat alergi obat (-)  <br /> - Riwayat alergi makanan (-)  <br />  <br /> Riwayat Penyakit Keluarga  <br /> - Tidak ada keluarga yang mengalami kejadian serupa, tetangga sebayanya ada yang pernah mengalami ruam sekitar 1 bulan yang lalu',
          'required': true,
          'order': 3,
          'group': 2,
          'layout': ''
        }),

        new FreeText({
          'key': '',
          'label': '',
          'value': '',
          'contents': 'Riwayat Diet  <br /> - Sejak lahir sampai usia 3 bulan anak minum ASI selanjutnya berhenti karena ibunya bekerja.  <br /> - Sejak umur 3 bulan anak mulai makan bubur papeda.  <br /> - Sejak umur 11 bulan anak mulai makan papeda, sagu, dan ikan.  <br />  <br /> Riwayat Kelahiran dan Perkembangan  <br /> - Anak dilahirkan di rumah oleh dukun, usia kehamilan 9 bulan  <br /> - Saat ini anak sudah bisa berdiri dan belajar berjalan, belum bisa ngomong satu kata pun.',
          'required': true,
          'order': 4,
          'group': 3,
          'layout': ''
        }),

      ];
      return questions.sort((a, b) => a.order - b.order);
    } 
  }
}
