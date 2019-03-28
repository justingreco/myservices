;
(function ($, window, document, undefined) {
  var pluginName = "myservices",

    defaults = {
      features: [],
      data: [],
      citylimits: {
          url: 'https://maps.raleighnc.gov/arcgis/rest/services/Planning/Jurisdictions/MapServer/0/query'
      },
      services: {
        url: "https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/query",
        categories: [{
            title: "Community",
            services: [{
                title: 'Annexation Year',
                url: "https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/4/query",
                texts: [{
                  title: "<a href='/business/content/PlanDev/Articles/DevServ/Annexations.html'>Annexation Year</a>:",
                  labels: "[CASE_YEAR]"
                }]
              },
              {
                title: 'CAC',
                url: "https://maps.raleighnc.gov/arcgis/rest/services/Boundaries/MapServer/1/query",
                texts: [{
                  title: "<a href='/community/content/CommServices/Articles/CitizensAdvisoryCouncil.html'>CAC</a>:",
                  labels: "[NAME]"
                }]
              },
              {
                title: 'City Council',
                url: "https://maps.raleighnc.gov/arcgis/rest/services/Boundaries/MapServer/2/query",
                texts: [{
                    title: "<a href='/government/content/BoardsCommissions/Articles/CityCouncil.html'>City Council District</a>:",
                    labels: "[COUNCIL_DIST]"
                  },
                  {
                    title: "<a href='/government/content/PubAffairs/Articles/CityCouncilBiographies.html'>Council Member</a>:",
                    labels: "[COUNCIL_PERSON]"
                  }
                ]
              },
              {
                title: 'Police District',
                url: "https://maps.raleighnc.gov/arcgis/rest/services/PublicSafety/PublicSafety/MapServer/5/query",
                texts: [{
                  title: "<a href='/safety/content/Police/Articles/[DISTRICT]District.html'>Police District</a>:",
                  labels: "[DISTRICT]"
                }]
              },
	      {
		title: "Hospitality District",
		url: "https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/Hospitality_District_Form/FeatureServer/1",
		texts: [{
		   title: "<a href='https://www.raleighnc.gov/home/content/CityMgrAdmin/Articles/GlenwoodSouthHospitalityDistrict.html'>Inside Hospitality District</a>:",
		   labels: "Yes"
		}]
	       }
            ]
          },
          {
            title: "Elections",
            services: [{
              title: 'Polling Place',
              url: "https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/Voting_Precincts_With_Polling_Places/FeatureServer/0/query",
              texts: [{
                  title: "<a href='http://www.wakegov.com/elections/Pages/default.aspx' target='_blank'>Polling Place</a>:",
                  labels: "[POLL_PL]"
                },
                {
                  title: "<a href='http://www.wakegov.com/elections/Pages/default.aspx' target='_blank'>Voting Precinct</a>:",
                  labels: "[PRECINCT]"
                },
                {
                  title: "<a href='http://www.wakegov.com/elections/Pages/default.aspx' target='_blank'>Voting Precinct</a>:",
                  labels: "[ST_NUMBER] [ST_NAME:proper], [CITY:proper]"
                }
              ]
            }]
          },
          {
            title: "Environmental",
            services: [{
              title: 'Drainage Basin',
              url: "https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/10/query",
              texts: [{
                title: "<a href='/services/content/PWksStormwater/Articles/Stormwater.html'>Drainage Basin</a>:",
                labels: "[BASINS:proper]"
              }]
            }]
          },
          {
            title: "Leaf Collection",
            services: [{
              title: "Leaf Collection",
              url: "https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/Leaf_Zones_With_Dates/FeatureServer/0/query",
              texts: [{
                  title: "<a href='https://ral.maps.arcgis.com/apps/webappviewer/index.html?id=09a3bfa3456f4d3b8ef3c0c3415d8cea&query=Leaf_Zones_With_Dates_1726%2CObjectId%2C[ObjectId]'>Zone</a>:",
                  labels: "[SECTION]",
                  name: 'Leaf Section'
                },
                {
                    title: "<a href='/services/content/PublicWorks/Articles/AnnualLeafCollection.html'>Current Collection</a>:",
                    labels: "[PASS]",
                    name: 'Leaf Pass'
                },                
                {
                  title: "<a href='/services/content/PublicWorks/Articles/AnnualLeafCollection.html'>Current Status</a>:",
                  labels: "[STATUS]",
                  name: 'Status'
                },
                {
                  title: "<a href='/services/content/PublicWorks/Articles/AnnualLeafCollection.html'>First Collection</a>:",
                  labels: "<br/>Place leaf piles at curb between [START_DATE_1:date] and [END_DATE_1:date]",
                  name: 'Pass 1 Date'
                },
                {
                  title: "<a href='/services/content/PublicWorks/Articles/AnnualLeafCollection.html'>Second Collection</a>:",
                  labels: "<br/>Place leaf piles at curb between [START_DATE_2:date] and [END_DATE_2:date]"
                  ,
                  name: 'Pass 2 Date'                  
                }
              ]
            }]
          },
          {
            title: "Recreation",
            services: [{
              title: 'Recreation District',
              url: "https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/14/query",
              texts: [{
                title: "<a href='/parks/content/PRecRecreation/Articles/AthleticYouthRegistrationDates.html'>Athletic District</a>:",
                labels: "[DISTRICT]"
              }]
            }]
          },
          {
            title: "Recycling",
            services: [{
              title: 'Recycling',
              url: "https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/12/query",
              texts: [{
                  title: "<a href='/services/content/SolidWaste/Articles/RecyclePages.html'>Day</a>:",
                  labels: "[DAY]"
                },
                {
                  title: "<a href='/services/content/SolidWaste/Articles/Recyclables.html'>Route</a>:",
                  labels: "[RECYCLE]"
                },
                {
                  title: "<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Week</a>:",
                  labels: "[WEEK]"
                }
              ]
            }]
          },
          {
            title: "Solid Waste",
            services: [{
              title: 'Solid Waste',
              url: "https://maps.raleighnc.gov/arcgis/rest/services/Services/PortalServices/MapServer/12/query",
              texts: [{
                  title: "<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Garbage Day</a>:",
                  labels: "[DAY:proper]"
                },
                {
                  title: "<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Garbage Route</a>:",
                  labels: "[GARBAGE]"
                },
                {
                  title: "<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Yard Waste Day</a>:",
                  labels: "[DAY:proper]"
                },
                {
                  title: "<a href='/services/content/SolidWaste/Articles/ServiceSchedule.html'>Yard Waste Route</a>:",
                  labels: "[YARDWASTE]"
                }
              ]
            }]
          }
        ]
      }
    };

  function Plugin(element, options) {
    this.element = element;

    this.options = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = pluginName;
    Plugin.prototype.options = this.options;
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      $(this.element).closest(".callout").css('overflow', 'visible');
      if (Plugin.prototype.options.layers) {

        var i = defaults.services.categories.length;
        while (i--) {
          var j = defaults.services.categories[i].services.length;

          while (j--) {
            if (Plugin.prototype.options.layers.indexOf(defaults.services.categories[i].services[j].title) < 0) {
              defaults.services.categories[i].services.splice(j, 1);
            }
          }
          if (defaults.services.categories[i].services.length === 0) {
            defaults.services.categories.splice(i,1);
          }
        }


        $(defaults.services.categories).each(function (i,category) {
          $(category.services).each(function (j,service) {
            if (Plugin.prototype.options.layers.indexOf(service.title) < 0) {
              category.services.splice(j,1);
              j--;
            }
          });
          if (category.services.length === 0) {
            defaults.services.categories.splice(i,1);
          }
        });
      }
      var container = $(this.element);
      var list = $("<ul id='servicesList' class='nolist'></ul>");
      var input = $("<input class='typeahead' id='Address' type='text' placeholder='222 West Hargett Street'></input>").appendTo(container);
      input.keydown(this.inputKeyDown);
      $('<link/>')
        .appendTo('head')
        .attr({
          type: 'text/css',
          rel: 'stylesheet'
        })
        .attr('href', '/content/static/styles/typeahead.css');
      this.setTypeahead(input);
      container.append(list);
      $("#servicesList").append("<li>Enter an address to view service information</li>");
      container.prepend("<label for='Address' class='ally'>Address</label>");
    },
    inputKeyDown: function (e) {
      if (e.keyCode === 13) {
        Plugin.prototype.geocodeAddress($(this).val());
      	$(this).off('keydown');
      	setTimeout(function () { 
		$("#Address").keydown(Plugin.prototype.inputKeyDown);}, 5000);
      }
    },
    geocodeAddress: function (address) {
      $.ajax({
          url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/CompositeLocator/GeocodeServer/findAddressCandidates',
          type: 'GET',
          dataType: 'json',
          data: {
            singleLine: address + ", Raleigh",
            searchExtent: {
              "xmin": -78.8251,
              "ymin": 35.7025,
              "xmax": -78.4689,
              "ymax": 35.9751,
              "spatialReference": {
                "wkid": 4326
              }
            },
            f: 'json'
          },
        })
        .done(function (data) {
          if (data.candidates.length > 0) {
            Plugin.prototype.getServices(data.candidates[0].location);
          }
        })
        .fail(function () {
          console.log("error");
        })
        .always(function () {
          console.log("complete");
        });

    },
    setTypeahead: function (input) {
      var addresses = new Bloodhound({
        datumTokenizer: function (datum) {
          return Bloodhound.tokenizers.whitespace(datum.value);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
          ajax: {
            type: "GET",
            dataType: "jsonp"
          },
          url: "https://maps.raleighnc.gov/arcgis/rest/services/Addresses/MapServer/0/query?f=pjson&oderByFields=ADDRESS&returnGeometry=false&outFields=ADDRESS&returnDistinctValues=false",
          filter: function (resp) {
            var data = []
            if (resp.features.length > 0) {
              $(resp.features).each(function (i, f) {
                data.push({
                  value: f.attributes['ADDRESS']
                });
              });
            }
            return data;
          },
          replace: function (url, uriEncodedQuery) {
            var newUrl = url + '&where=ADDRESSU like ' + "'" + Plugin.prototype.checkAbbreviations(uriEncodedQuery).toUpperCase() + "%'";
            return encodeURI(newUrl);
          }
        }
      });
      addresses.initialize();
      input.typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      }, {
        name: 'Addresses',
        displayKey: 'value',
        source: addresses.ttAdapter()
      }).on('typeahead:selected', this.typeaheadSelected);
    },
    checkAbbreviations: function (value) {
      var abbreviations = [{
          full: "Saint ",
          abbr: " St "
        },
        {
          full: " North ",
          abbr: " N "
        },
        {
          full: " South ",
          abbr: " S "
        },
        {
          full: " West ",
          abbr: " W "
        },
        {
          full: " East ",
          abbr: " E "
        },
        {
          full: " Martin Luther King Jr",
          abbr: " MLK "
        }
      ];
      value = value.replace("'", "");
      value = value.replace(".", "");
      $.each(abbreviations, function (i, a) {
        value = value.replace(new RegExp(a.abbr, 'gi'), a.full);
      });
      return value;
    },
    typeaheadSelected: function (obj, data, dataset) {
      $.ajax({
        url: 'https://maps.raleighnc.gov/arcgis/rest/services/Addresses/MapServer/0/query',
        type: 'GET',
        dataType: 'jsonp',
        data: {
          f: 'pjson',
          where: "ADDRESS = '" + data.value + "'",
          returnGeometry: true
        }
      }).done(function (data) {
        if (data.features.length > 0) {
          Plugin.prototype.getServices(data.features[0].geometry);
        }
      });
    },
    getServices: function (geometry) {
      var list = $("#servicesList");
	  list.empty();
      if (defaults.services) {
        var point = {
            x: geometry.x,
            y: geometry.y,
            spatialReference: {
              wkid: 102719,
              latestWkid: 2264
            }
          },
          extent = {
            xmin: point.x - 2,
            ymin: point.y - 2,
            xmax: point.x + 2,
            ymax: point.y + 2,
            spatialReference: point.spatialReference
          },
        data = {
          geometry: JSON.stringify(point),
          geometryType: "esriGeometryPoint",
          returnGeometry: false,
          f: "pjson",
          outFields: '*'
        };


        Plugin.prototype.checkCityLimits(point).then(function (inlimits) {
            console.log(inlimits);
        Plugin.prototype.getCategories(defaults.services.categories, data).then(function () {
          defaults.data = defaults.data.sort(Plugin.prototype.sortByCategory);
          
         
          list.empty();
          var html = "";
          var numadded = 0;
          $(defaults.data).each(function (i, item) {
            numadded = 0;
            list.append("<li><h4 style='margin: 0;padding: 10px 0 10px 0;color: #4A8B2C;line-height: 1;border-bottom: 1px solid #4A8B2C;font-weight: 700;'>" + item.category.title + "</h4></li>");

            var div = $("<ul class='nolist'></ul>");
            item.features = item.features.sort(Plugin.prototype.sortByServiceOrder);
            $(item.features).each(function (i, feature) {
              if ((item.category.title === 'Leaf Collection' && !inlimits)) {
                  feature.features = [];
              }
              if (feature.features.length > 0) {
                $(feature.service.texts).each(function (j, text) {
                  if (item.category.title === "Leaf Collection") {
                    console.log(item);
                    if (feature.features[0].attributes.PASS) {
                      if (feature.features[0].attributes.PASS === "2") {
                        feature.features[0].attributes.PASS = 'Second';
                      } else {
                        feature.features[0].attributes.PASS = 'First';
                      }
                    }
                    
                    if (feature.features[0].attributes.STATUS === 'CLOSED') {
                      feature.features[0].attributes.STATUS = 'Closed';
                    }
                    if (feature.features[0].attributes.STATUS === 'COMPLETE') {
                      feature.features[0].attributes.STATUS = 'Completed';
                    }   
                    if (feature.features[0].attributes.STATUS === 'INPROG') {
                      feature.features[0].attributes.STATUS = 'In Progress';
                    }        
                    if (feature.features[0].attributes.STATUS === 'PLANNED') {
                      feature.features[0].attributes.STATUS = 'Planned';
                    }                   
                    if (feature.features[0].attributes.STATUS === 'DELAYED') {
                      feature.features[0].attributes.STATUS = 'Delayed';
                    }          
                    if (feature.features[0].attributes.STATUS === 'UPCOMING') {
                      feature.features[0].attributes.STATUS = 'Upcoming';
                    }          
                                                                                                  
                  }

                  var li = $("<li></li>");
                  var html = Plugin.prototype.getServiceLabel(text.title, feature.service.layerId, feature.features[0]) + " " + Plugin.prototype.getServiceLabel(text.labels, feature.service.layerId, feature.features[0]);
                  
                  if ((text.name === 'Pass 1 Date' && feature.features[0].attributes.PASS_1_SCHEDULED === 'No')) {
                    html = Plugin.prototype.getServiceLabel(text.title, feature.service.layerId, feature.features[0]) + " Not Scheduled.  Check back on " + Plugin.prototype.dateToString(feature.features[0].attributes.START_DATE_1);
                  }
                  if ((text.name === 'Pass 2 Date' && feature.features[0].attributes.PASS_2_SCHEDULED === 'No')) {
                    html = Plugin.prototype.getServiceLabel(text.title, feature.service.layerId, feature.features[0]) + " Not Scheduled.  Check back on " + Plugin.prototype.dateToString(feature.features[0].attributes.START_DATE_2);
                  }

                  //if ((text.name === 'Pass 1 Date' && new Date(feature.features[0].attributes.END_DATE_1) <= new Date())) {
                  //  html = Plugin.prototype.getServiceLabel(text.title, feature.service.layerId, feature.features[0]) + " Leaf collection ended on " + Plugin.prototype.dateToString(feature.features[0].attributes.END_DATE_1);
                  //}
                  //if ((text.name === 'Pass 2 Date' && new Date(feature.features[0].attributes.END_DATE_2) <= new Date())) {
                  //  html = Plugin.prototype.getServiceLabel(text.title, feature.service.layerId, feature.features[0]) + " Leaf collection ended on " + Plugin.prototype.dateToString(feature.features[0].attributes.END_DATE_2);
                  //}                  
                  if (html.indexOf('Null') < 0 && html.indexOf('undefined') < 0) {
                    li.append(html);
                    div.append(li);
                  }
                });
                numadded++;
              }


            });
            if (numadded > 0) {
                list.append(div);
              } else {
                var li = $("<li>No information available</li>");
                div.append(li);
                list.append(div);
              }

          });
        });
    });
      }
    },
    getCategories: function (categories, data) {
      defaults.data = [];
      var deferreds = [];

      $.each(categories, function (i, category) {

        var def = Plugin.prototype.queryServices(category.services, data).then(function (results) {
          defaults.data.push({
            category: category,
            features: defaults.features
          })
        });
        deferreds.push(def);
      });
      return $.when.apply($, deferreds).then(function () {});

    },

    sortByCategory: function (a, b) {
      if (a.category.title < b.category.title)
        return -1;
      if (a.category.title > b.category.title)
        return 1;
      return 0;
    },
    sortByService: function (a, b) {
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    },
    sortByServiceOrder: function (a, b) {

      if (a.service.title < b.service.title)
        return -1;
      if (a.service.title > b.service.title)
        return 1;
      return 0;
    },

    queryServices: function (services, data) {
      var deferreds = [];
      var features = [];
      $.each(services, function (i, service) {
        var def = $.ajax({
          url: service.url,
          type: 'GET',
          dataType: 'jsonp',
          data: data
        }).done(function (results) {
          features.push({
            service: service,
            features: results.features
          });
        });
        deferreds.push(def)
      });
      return $.when.apply($, deferreds).then(function () {
        features = features.sort(Plugin.prototype.sortByService);
        defaults.features = features;
      });
    },
    checkCityLimits: function (point) {
        var dfd = jQuery.Deferred();

        $.ajax({
          url: defaults.citylimits.url,
          type: 'GET',
          dataType: 'jsonp',
          data: {
            f: 'pjson',
            where: "LONG_NAME = 'RALEIGH'",
            geometry: JSON.stringify(point),
            geometryType: "esriGeometryPoint",
            returnGeometry: false,
            returnCountOnly: true
          }
        }).then(function (data) {
          dfd.resolve(data.count > 0);
        });
        return dfd.promise();       
    },

    getServiceLabel: function (label, id, service) {
      var plugin = this;
      var fieldCnt = label.split("[").length - 1;
      for (var i = 0; i < fieldCnt; i++) {
        var start = label.indexOf("[") + 1;
        var end = label.indexOf("]");
        var field = label.substring(start, end);
        var arr = field.split(":");
        field = arr[0];
        var value = service.attributes[field];
        if (arr.length > 1) {
          value = Plugin.prototype.checkCase(value, arr[1]);
          label = label.replace(new RegExp(field + ":" + arr[1], "gi"), field);
        }
        label = label.replace('[' + field + ']', value);
      }
      label = label.replace(new RegExp(";", "gi"), "<br/>");
      return label;
    },
    dateToString: function (value) {
      if (value != "Null") {
        var date = new Date(value);
        value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
      }
      return value;
    },
    checkCase: function (value, caseType) {
      if (value) {
        switch (caseType) {
          case "upper":
            value = value.toUpperCase();
            break;
          case "lower":
            value = value.toLowerCase();
            break;
          case "proper":
            value = Plugin.prototype.toProperCase(value);
            //handle NC abbreviation
            value = value.replace(" Nc", " NC");
            break;
          case "date":
            value = Plugin.prototype.dateToString(value);
            break;
        }
      } else {
        value = '';
      }

      return value;
    },
    toProperCase: function (value) {
      return value.toLowerCase().replace(/^(.)|\s(.)/g,
        function ($1) {
          return $1.toUpperCase();
        });
    }
  };
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      } else if ($.isFunction(Plugin.prototype[options])) {
        $.data(this, 'plugin_' + pluginName)[options]();
      }
    });
  }
})(jQuery, window, document);
