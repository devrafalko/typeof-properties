import Jasmine from 'jasmine';
import { SpecReporter } from 'jasmine-spec-reporter';

const jasmine = new Jasmine();
const deep = process.argv.slice(2)[0] === 'deep';

jasmine.loadConfig({
  spec_dir: 'tests',
  spec_files: [
    '*.js'
  ],
  helpers: [
    'helpers/*.js'
  ],
});

jasmine.clearReporters();
jasmine.addReporter(new SpecReporter({
  spec: {
    displayErrorMessages: false,
    displayStacktrace: true,
    displaySuccessful: !deep,
    displayFailed: true,
    displayPending: !deep,
    displayDuration: false
  },
  summary: {
    displayErrorMessages: deep,
    displayStacktrace: deep,
    displaySuccessful: false,
    displayFailed: deep,
    displayPending: false,
    displayDuration: true
  }
}));

jasmine.execute();