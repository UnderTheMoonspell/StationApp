describe('Testing services with $http dependency', function() {

    var service, httpBackend, data;

    beforeEach(module('stationService'));

    beforeEach(inject(function(stationService, _$httpBackend_) {
        service = stationService;
        httpBackend = _$httpBackend_;
    }));

    it ('should be loaded', function() {
        expect(service).toBeDefined();
    });

    it ('should return get data when calling getData', function() {
      httpBackend.expectGET('http://localhost:4000/api/station').respond({name: 'example'});
  
      service.getData(1).then(function(result) {
          data = result;
      });

      httpBackend.flush();

      expect(data).toBe({name: 'example'});
    });
    
    afterEach(function() {
      // make sure all requests where handled as expected.
      httpBackend.verifyNoOutstandingRequest();
      httpBackend.verifyNoOutstandingExpectation();
    });
});