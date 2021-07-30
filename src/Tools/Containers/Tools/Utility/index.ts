/**
 * Lib
 */
import { container } from 'tsyringe';

/**
 * Tools
 */
import { DateTool } from '@/Tools/Utility/Date';

/**
 * Inject
 */
container.register<DateTool>('DateTool', { useClass: DateTool });

export { container };
