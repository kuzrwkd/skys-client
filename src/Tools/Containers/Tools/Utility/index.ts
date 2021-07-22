/**
 * Lib
 */
import { container } from 'tsyringe';

/**
 * Tools
 */
import { DayJs } from '@/Tools/Utility/Date';

/**
 * Inject
 */
container.register<DayJs>('DayJs', { useClass: DayJs });

export { container };
