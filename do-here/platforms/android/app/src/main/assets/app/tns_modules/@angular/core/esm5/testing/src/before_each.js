/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Public Test Library for unit testing Angular applications. Assumes that you are running
 * with Jasmine, Mocha, or a similar framework which exports a beforeEach function and
 * allows tests to be asynchronous by either returning a promise or using a 'done' parameter.
 */
import { resetFakeAsyncZone } from './fake_async';
import { TestBed } from './test_bed';
var _global = (typeof window === 'undefined' ? global : window);
// Reset the test providers and the fake async zone before each test.
if (_global.beforeEach) {
    _global.beforeEach(function () {
        TestBed.resetTestingModule();
        resetFakeAsyncZone();
    });
}
// TODO(juliemr): remove this, only used because we need to export something to have compilation
// work.
export var __core_private_testing_placeholder__ = '';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmb3JlX2VhY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2JlZm9yZV9lYWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUluQyxJQUFNLE9BQU8sR0FBUSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV2RSxxRUFBcUU7QUFDckUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNqQixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixrQkFBa0IsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGdHQUFnRztBQUNoRyxRQUFRO0FBQ1IsTUFBTSxDQUFDLElBQU0sb0NBQW9DLEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIFB1YmxpYyBUZXN0IExpYnJhcnkgZm9yIHVuaXQgdGVzdGluZyBBbmd1bGFyIGFwcGxpY2F0aW9ucy4gQXNzdW1lcyB0aGF0IHlvdSBhcmUgcnVubmluZ1xuICogd2l0aCBKYXNtaW5lLCBNb2NoYSwgb3IgYSBzaW1pbGFyIGZyYW1ld29yayB3aGljaCBleHBvcnRzIGEgYmVmb3JlRWFjaCBmdW5jdGlvbiBhbmRcbiAqIGFsbG93cyB0ZXN0cyB0byBiZSBhc3luY2hyb25vdXMgYnkgZWl0aGVyIHJldHVybmluZyBhIHByb21pc2Ugb3IgdXNpbmcgYSAnZG9uZScgcGFyYW1ldGVyLlxuICovXG5cbmltcG9ydCB7cmVzZXRGYWtlQXN5bmNab25lfSBmcm9tICcuL2Zha2VfYXN5bmMnO1xuaW1wb3J0IHtUZXN0QmVkfSBmcm9tICcuL3Rlc3RfYmVkJztcblxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XG5cbmNvbnN0IF9nbG9iYWwgPSA8YW55Pih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvdyk7XG5cbi8vIFJlc2V0IHRoZSB0ZXN0IHByb3ZpZGVycyBhbmQgdGhlIGZha2UgYXN5bmMgem9uZSBiZWZvcmUgZWFjaCB0ZXN0LlxuaWYgKF9nbG9iYWwuYmVmb3JlRWFjaCkge1xuICBfZ2xvYmFsLmJlZm9yZUVhY2goKCkgPT4ge1xuICAgIFRlc3RCZWQucmVzZXRUZXN0aW5nTW9kdWxlKCk7XG4gICAgcmVzZXRGYWtlQXN5bmNab25lKCk7XG4gIH0pO1xufVxuXG4vLyBUT0RPKGp1bGllbXIpOiByZW1vdmUgdGhpcywgb25seSB1c2VkIGJlY2F1c2Ugd2UgbmVlZCB0byBleHBvcnQgc29tZXRoaW5nIHRvIGhhdmUgY29tcGlsYXRpb25cbi8vIHdvcmsuXG5leHBvcnQgY29uc3QgX19jb3JlX3ByaXZhdGVfdGVzdGluZ19wbGFjZWhvbGRlcl9fID0gJyc7XG4iXX0=