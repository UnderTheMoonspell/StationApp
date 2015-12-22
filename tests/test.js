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

    it ('should return get data when calling getAll', function() {
        httpBackend.expectGET('/api/station').respond({name: 'example'});
        
        service.getAll().then(function(result) {
            data = result.data;
        });
        
        httpBackend.flush();
        
        expect(data.name).toBe('example');
    });
    
    it ('should return get data when calling getByInput', function() {
        httpBackend.expectGET('/api/station?search=li').respond({name: 'example'});
        
        service.getByInput('li').then(function(result) {
            data = result.data;
        });
        
        httpBackend.flush();
        
        expect(data.name).toBe('example');
    });    

    afterEach(function() {
        httpBackend.verifyNoOutstandingRequest();
        httpBackend.verifyNoOutstandingExpectation();
    });
});