describe('Testing services with $http dependency', function() {

    var service, httpBackend, data;

    beforeEach(module('stationApp'));

    beforeEach(inject(function(stationService, _$httpBackend_) {
        service = stationService;
        httpBackend = _$httpBackend_;
    }));

    it ('should be loaded', function() {
        expect(service).toBeDefined();
    });

    it ('should return get data when calling getData', function() {
      httpBackend.expectGET('/api/station').respond(HTTP_STATUS_CODE, {name: 'example'});
  
      service.getAll().then(function(result) {
          data = result;
      });

      httpBackend.flush();

    //   expect(data).toBe({name: 'example'});
    });
    
    afterEach(function() {
      // make sure all requests where handled as expected.
      httpBackend.verifyNoOutstandingRequest();
      httpBackend.verifyNoOutstandingExpectation();
    });
});