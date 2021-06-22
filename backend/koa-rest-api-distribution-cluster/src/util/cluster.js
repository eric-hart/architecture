import Message from '~/class/Message';
import Request from '~/class/Request';

export function sleep(millisecond) {
  return new Promise((resolve) => {
    global.setTimeout(resolve, millisecond);
  });
}
