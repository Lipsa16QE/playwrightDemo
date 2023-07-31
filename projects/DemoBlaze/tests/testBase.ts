import base from '@playwright/test';
import type { PerformanceOptions, PlaywrightPerformance, PerformanceWorker } from "playwright-performance";
import { playwrightPerformance } from 'playwright-performance';

export const test = base.extend<PlaywrightPerformance, PerformanceOptions & PerformanceWorker>({
    performance: playwrightPerformance.performance,
    performanceOptions: [{
        analyzeByBrowser: true,
        disableAppendToExistingFile: false,
        performanceResultsFileName: "customName"
    }, { scope: 'worker' }],
    worker: [playwrightPerformance.worker, { scope: 'worker', auto: true }]
});