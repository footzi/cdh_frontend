import { normalizeScheduleData } from '../../utils/normalize-schedule-data';


describe('normalizeScheduleData', () => {
  it('normalizeScheduleData', () => {
    const result = normalizeScheduleData(5 , 5);

    expect(result).toBe(10);
  })
})
