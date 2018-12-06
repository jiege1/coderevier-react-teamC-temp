import { mock, Random } from 'mockjs';
import { IApiBool } from 'common/types';
import { output } from '../common/utils';

mock(/mock.bool/, () => {
  return output<IApiBool>({
    success: Random.boolean(9, 1, true),
  });
});
