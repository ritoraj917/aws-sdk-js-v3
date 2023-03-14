import { WaiterOptions } from "../waiter";

/**
 * @internal
 *
 * Validates that waiter options are passed correctly
 * @param options - a waiter configuration object
 */
export const validateWaiterOptions = <Client>(options: WaiterOptions<Client>): void => {
  if (options.maxWaitTime < 1) {
    throw new Error(`WaiterConfiguration.maxWaitTime must be greater than 0`);
  } else if (options.minDelay < 1) {
    throw new Error(`WaiterConfiguration.minDelay must be greater than 0`);
  } else if (options.maxDelay < 1) {
    throw new Error(`WaiterConfiguration.maxDelay must be greater than 0`);
  } else if (options.maxWaitTime <= options.minDelay) {
    throw new Error(
      `WaiterConfiguration.maxWaitTime [${options.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`
    );
  } else if (options.maxDelay < options.minDelay) {
    throw new Error(
      `WaiterConfiguration.maxDelay [${options.maxDelay}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`
    );
  }
};
