import * as _ from 'lodash';
class Startup {
    static main() {
        const group = _.groupBy(['one', 'two', 'three'], 'length');
        console.log(group);
        return 0;
    }
}
Startup.main();
