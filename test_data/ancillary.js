const data = [
  {
    "@timestamp": "2021-03-30T19:21:42.311164Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ARP/2022/008/WFF_NISAR_2022_008_07_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ARP/2022/008/WFF_NISAR_2022_008_07_30_59_ARP",
    ],
    creation_timestamp: "2021-03-30T19:21:32.678",
    dataset: "ARP",
    dataset_level: "NA",
    dataset_type: "ARP",
    id: "WFF_NISAR_2022_008_07_30_59_ARP",
    images: [],
    ipath: "hysds::data/ARP",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 7,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-WFF_NISAR_2022_008_07_30_59.arp-20210330T192048.977278Z/output/WFF_NISAR_2022_008_07_30_59_ARP",
      FileName: "WFF_NISAR_2022_008_07_30_59.arp",
      FileSize: 44,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/WFF_NISAR_2022_008_07_30_59.arp",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:48.739755Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:32.668598Z",
      ProductReceivedYear: 2021,
      ProductType: "ARP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:47.029Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "4vOwxWzgdoZoIdNNFOsP2LrroRUVexbEGUFROlRrhxJjh3sVrUAbaNnKh6C1e1+UrXev94VtMzeh8rBNizPH1LqMkpPMX0+W",
          "x-amz-request-id": "MDFTBVR6EECJ08AY",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e44959672c95bcf395239733857198b7",
            key: "arp/WFF_NISAR_2022_008_07_30_59.arp",
            sequencer: "0060637A100227E3F4",
            size: 44,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132048662",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132048661",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:47.029Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"MDFTBVR6EECJ08AY","x-amz-id-2":"4vOwxWzgdoZoIdNNFOsP2LrroRUVexbEGUFROlRrhxJjh3sVrUAbaNnKh6C1e1+UrXev94VtMzeh8rBNizPH1LqMkpPMX0+W"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"arp/WFF_NISAR_2022_008_07_30_59.arp","size":44,"eTag":"e44959672c95bcf395239733857198b7","sequencer":"0060637A100227E3F4"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "f4b40774dfeebc4a1aa8fa39b8da54a4",
        messageAttributes: {},
        messageId: "644c433d-8bd9-4d2c-a36d-ae4f81a67ba6",
        receiptHandle:
          "AQEBXyGEw+hIzw/1a1pdm8O/aE8Vf2sD4UeYZCgqriMkTBZqfcMKVcMuEy/ADz2LauXEYaRng9xxR4zSnWLw/ucGVHNA81qrToSecwPlGDJrfYKTqK9mBVJM5qS2VpYO/XhvNW0mIfj/dVpcfjrsrFDucc6iYRc/9AJOTC05FoU2II4ivpjxRUSG2dGSCgrAkoY8vP5m7Zh2oPZ4H4iFh6eJyQPX3uMVPCeGRJqASm3pQASmrzPGgBbn5HDf9Jjd6LU+zfAkdJ5t4cU7GMKREbEtdIMzoBOmgTurpycbtmze/XeBeQSR6Qw89/RrgMLacnzWJNejjpjJYLE8AJcRR/kItbMK1P8jxvpJvTMouNs3Uqm2UOMV4sToE11LEdateDONpQrwNuEa5mTDFaklNINMfBvrVy0IRgpv0zx5t2N2HpQ=",
      },
      Station: "WFF",
      id: "WFF_NISAR_2022_008_07_30_59_ARP",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "WFF_NISAR_2022_008_07_30_59_ARP",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/WFF_NISAR_2022_008_07_30_59.arp",
      ],
      wasGeneratedBy: "task_id:3de92016-790e-4baf-a154-7590b7f1baa8",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ARP/2022/008/WFF_NISAR_2022_008_07_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ARP/2022/008/WFF_NISAR_2022_008_07_30_59_ARP",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:21:59.569716Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ARP/2022/008/SGS_NISAR_2022_008_08_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ARP/2022/008/SGS_NISAR_2022_008_08_30_59_ARP",
    ],
    creation_timestamp: "2021-03-30T19:21:50.186",
    dataset: "ARP",
    dataset_level: "NA",
    dataset_type: "ARP",
    id: "SGS_NISAR_2022_008_08_30_59_ARP",
    images: [],
    ipath: "hysds::data/ARP",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 8,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-SGS_NISAR_2022_008_08_30_59.arp-20210330T192059.468503Z/output/SGS_NISAR_2022_008_08_30_59_ARP",
      FileName: "SGS_NISAR_2022_008_08_30_59.arp",
      FileSize: 44,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/SGS_NISAR_2022_008_08_30_59.arp",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:59.168944Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:50.177095Z",
      ProductReceivedYear: 2021,
      ProductType: "ARP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:57.049Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "tsDBcLhYvCpk/g0ir6SQANIgevEwQ2JXPKj4UDvOmEjwYjHI+Hg2/azRyP5Y+gRlRl7KgnEl85dpsf4bOlmceg8vhN8c+3Vs",
          "x-amz-request-id": "9NK98SQQKEGY2PTT",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "25be69be2f8074e638868582ab91f7b6",
            key: "arp/SGS_NISAR_2022_008_08_30_59.arp",
            sequencer: "0060637A1A28C497AB",
            size: 44,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132059042",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132059040",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:57.049Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"9NK98SQQKEGY2PTT","x-amz-id-2":"tsDBcLhYvCpk/g0ir6SQANIgevEwQ2JXPKj4UDvOmEjwYjHI+Hg2/azRyP5Y+gRlRl7KgnEl85dpsf4bOlmceg8vhN8c+3Vs"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"arp/SGS_NISAR_2022_008_08_30_59.arp","size":44,"eTag":"25be69be2f8074e638868582ab91f7b6","sequencer":"0060637A1A28C497AB"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "e8eae7b89cad3be22f9eda202bdec842",
        messageAttributes: {},
        messageId: "c0c11b6d-4673-4b76-b19f-b645827afa0c",
        receiptHandle:
          "AQEBhW9mP8yhLieNKFCE7L92OqKyOXXyp0WpbywIkPzsUa8T9O2LFqpyif0ghZQPXp4vzNLRTZEpV/pbboUDHDdK7dN2bFjVmmCwvBkzJ+rBnnnohywdVXXmtxK+euQpg9bQ59cuO7l1qf0+UgbYRjT6qJhDFSvCve/z1qdJNCP3ySG3rN2ThZF1nnS5e0SoQGEj6Shd0kfsbPs8Ycme8y9vCkCGoyjcdQMBjrdtQlGrN7bxNX6R+cqhOkwFL85nPIn3YcAidnf7lHjyEfNXSRkslXBOaa8F22MHcnAXADWJYsvf794ShNqR7CYjeqaMd39zpT9zj2YCwuty//E2koBcoGFQLjhwrJyVYRKcAwW15kZYbNZBLkqzDAtZoywKQpeL7fNTMJtHOEiJtaJuiZHm5MoQiP2sTNbqz/3KadbBTvc=",
      },
      Station: "SGS",
      id: "SGS_NISAR_2022_008_08_30_59_ARP",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "SGS_NISAR_2022_008_08_30_59_ARP",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/SGS_NISAR_2022_008_08_30_59.arp",
      ],
      wasGeneratedBy: "task_id:d6be3561-5a8f-4d6c-a339-7f710fcff9a1",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ARP/2022/008/SGS_NISAR_2022_008_08_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ARP/2022/008/SGS_NISAR_2022_008_08_30_59_ARP",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:22:25.680193Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ARP/2022/008/PA_NISAR_2022_008_09_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ARP/2022/008/PA_NISAR_2022_008_09_30_59_ARP",
    ],
    creation_timestamp: "2021-03-30T19:22:15.068",
    dataset: "ARP",
    dataset_level: "NA",
    dataset_type: "ARP",
    id: "PA_NISAR_2022_008_09_30_59_ARP",
    images: [],
    ipath: "hysds::data/ARP",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 9,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/22/ingest-staged-PA_NISAR_2022_008_09_30_59.arp-20210330T192106.309661Z/output/PA_NISAR_2022_008_09_30_59_ARP",
      FileName: "PA_NISAR_2022_008_09_30_59.arp",
      FileSize: 43,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/PA_NISAR_2022_008_09_30_59.arp",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:06.075311Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:15.061140Z",
      ProductReceivedYear: 2021,
      ProductType: "ARP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:21:03.591Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "+eWPiHKe4Z7HSMZpvQ1HueFNSWH+CSuhqVhJ3VOl/+93jWxc5wngaujlqpEigVxzfYMbZCpJr1JjXA5rFL2OXjsnlLon/XeM",
          "x-amz-request-id": "290C4VYSDWV1WQSJ",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "5a2c9979340321cdf139948993f86fd0",
            key: "arp/PA_NISAR_2022_008_09_30_59.arp",
            sequencer: "0060637A20C2F04DA2",
            size: 43,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132065905",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132065904",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:21:03.591Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"290C4VYSDWV1WQSJ","x-amz-id-2":"+eWPiHKe4Z7HSMZpvQ1HueFNSWH+CSuhqVhJ3VOl/+93jWxc5wngaujlqpEigVxzfYMbZCpJr1JjXA5rFL2OXjsnlLon/XeM"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"arp/PA_NISAR_2022_008_09_30_59.arp","size":43,"eTag":"5a2c9979340321cdf139948993f86fd0","sequencer":"0060637A20C2F04DA2"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "a74ff0e513e1e262cfedaf38cc81162f",
        messageAttributes: {},
        messageId: "0a113ca5-e60d-4c37-943d-429442488d2e",
        receiptHandle:
          "AQEBJqRj3dNUDtWkOhRd1AAJylYiZDeeLFrQcJ/dh/SPjrMeS6FI/xY/qD4uolTMZGwT1ouC9UUwKDKrIZB6/gLmmkci6x1NHS+4YA2+0jFTlDJsoCUPvfStWqNWT5DSbbf8niowyq2aplWjkvsB1LBLfYXLro/kAVO50IstBGGXwfZGoyJ0SAxvcsaQhJHKkiAqH16qHgvxwJNlDhNy7lJcDd6ogMTStfBD2gE9rIRKoQEf54dDme2oB1jhhoid2iTgwTwkHW5hpEouaf4ndrLdgg9QnhS/LSEVRy1uJffPAM3QkEzloSVh7JRHGfgIX3h4tg6SwmaK9RwzE9IHtmMeDt016CSQ+Tbb+/5Q6ZXwdtRXqtOPnZ2yRqHhSwVIY4KzasgxmMsxTG619ZqNcsQKh+uNbuzzO1BXJJF7gsELsaE=",
      },
      Station: "PA",
      id: "PA_NISAR_2022_008_09_30_59_ARP",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "PA_NISAR_2022_008_09_30_59_ARP",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/PA_NISAR_2022_008_09_30_59.arp",
      ],
      wasGeneratedBy: "task_id:c69e8035-d382-4720-90b3-2683fc373722",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ARP/2022/008/PA_NISAR_2022_008_09_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ARP/2022/008/PA_NISAR_2022_008_09_30_59_ARP",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:20:59.539673Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ARP/2022/008/ASF_NISAR_2022_008_06_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ARP/2022/008/ASF_NISAR_2022_008_06_30_59_ARP",
    ],
    creation_timestamp: "2021-03-30T19:20:49.884",
    dataset: "ARP",
    dataset_level: "NA",
    dataset_type: "ARP",
    id: "ASF_NISAR_2022_008_06_30_59_ARP",
    images: [],
    ipath: "hysds::data/ARP",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 6,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-ASF_NISAR_2022_008_06_30_59.arp-20210330T192026.971984Z/output/ASF_NISAR_2022_008_06_30_59_ARP",
      FileName: "ASF_NISAR_2022_008_06_30_59.arp",
      FileSize: 46,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/ASF_NISAR_2022_008_06_30_59.arp",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:26.719871Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:49.875324Z",
      ProductReceivedYear: 2021,
      ProductType: "ARP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:24.559Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "h/1cbn0hkcAakKxNe7yl1QUslQfnJljGWRjA7MW/tvT0+Z4mycTEeu89nDjlgYdix1FK0Q611nUgH9rs39Ho2F14kkvDa8nb",
          "x-amz-request-id": "FKD1NRDTWWAVE5CD",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e49c007133956e7d15a11927b01666ab",
            key: "arp/ASF_NISAR_2022_008_06_30_59.arp",
            sequencer: "00606379F9299FEDBB",
            size: 46,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132026632",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132026630",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:24.559Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"FKD1NRDTWWAVE5CD","x-amz-id-2":"h/1cbn0hkcAakKxNe7yl1QUslQfnJljGWRjA7MW/tvT0+Z4mycTEeu89nDjlgYdix1FK0Q611nUgH9rs39Ho2F14kkvDa8nb"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"arp/ASF_NISAR_2022_008_06_30_59.arp","size":46,"eTag":"e49c007133956e7d15a11927b01666ab","sequencer":"00606379F9299FEDBB"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "5195c05b98571d89c73d104ae8c18d73",
        messageAttributes: {},
        messageId: "faebbe0a-fc84-4a68-919d-d0756cc0f4df",
        receiptHandle:
          "AQEBzxno431GC5AmMsXjMZUwoHVRAwfWFrsFYtzP02aXd1nMjfZISHAbrc9UeHohtDCDBZfmV5E4Fhytv1HePhxyikWS2xWF9AOxNXY4D25mTChlMHi4rKrQ4Dz2NIbTAdKeYBqrPAchfSu9kXmiaw7XuUB90GtYjc/86KUOtqqi/GVdcph7y0O/Ydk9zD7Pl3mr0HnvJhKdzAKEW4wRJeKTsTiEsxbmH/ceAlPrbqOnDm1vAkVbkM0qi59qnFuURd3R/ieHhLPDbLY6abQQfOl8nVX3hMDxaZY9QrM4GDUTVWBZ7bzwmLmItjy4czqj1llFIs+hvi64kkggDVaWBJZywv1A/w1mKP79snfipSUOTZnEByZtls6gdxkrNvJiAM1695CWlCglaP2kLRZPpN6qQSCq636AMPu/5T7WWnZ3OlI=",
      },
      Station: "ASF",
      id: "ASF_NISAR_2022_008_06_30_59_ARP",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "ASF_NISAR_2022_008_06_30_59_ARP",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/arp/ASF_NISAR_2022_008_06_30_59.arp",
      ],
      wasGeneratedBy: "task_id:0961f08b-c090-4a2f-a8b2-20393ce20484",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ARP/2022/008/ASF_NISAR_2022_008_06_30_59_ARP",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ARP/2022/008/ASF_NISAR_2022_008_06_30_59_ARP",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:17:47.319541Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/COP/2019/038/COP_e2019-038_c2019-039_v001",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/COP/2019/038/COP_e2019-038_c2019-039_v001",
    ],
    creation_timestamp: "2021-03-30T19:17:37.983",
    dataset: "COP",
    dataset_level: "NA",
    dataset_type: "COP",
    id: "COP_e2019-038_c2019-039_v001",
    images: [],
    ipath: "hysds::data/COP",
    metadata: {
      CreationDateTime: "2019-02-08T00:00:00.000000Z",
      ExecutionDateTime: "2019-02-07T00:00:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-COP_e2019-038_c2019-039_v001.xml-20210330T191730.806201Z/output/COP_e2019-038_c2019-039_v001",
      FileName: "COP_e2019-038_c2019-039_v001.xml",
      FileSize: 263628,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/COP_e2019-038_c2019-039_v001.xml",
      ],
      Lambda_trigger_time: "2021-03-30T19:17:30.533745Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:37.975742Z",
      ProductReceivedYear: 2021,
      ProductType: "COP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:26.129Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "q7UQ7G4vW6CRvzhynlddv+wOEhHiaOCQD0Y9cV9tTOKZgGNQeMglzXyp+XxX+PCggkK/tPzsZaDTROF/PD49J2A9np7u7pMV",
          "x-amz-request-id": "6MNHF03G2QCG4SC5",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "a5d56ba276467a6c28f1825bf426a96a",
            key: "gds/COP_e2019-038_c2019-039_v001.xml",
            sequencer: "0060637948605E0C73",
            size: 263628,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131850459",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131850457",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:26.129Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"6MNHF03G2QCG4SC5","x-amz-id-2":"q7UQ7G4vW6CRvzhynlddv+wOEhHiaOCQD0Y9cV9tTOKZgGNQeMglzXyp+XxX+PCggkK/tPzsZaDTROF/PD49J2A9np7u7pMV"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/COP_e2019-038_c2019-039_v001.xml","size":263628,"eTag":"a5d56ba276467a6c28f1825bf426a96a","sequencer":"0060637948605E0C73"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c5ee5261ac0e0f4d8c502c2c2b8ce07b",
        messageAttributes: {},
        messageId: "a681cc79-74e8-4fce-baaf-37145501a6a1",
        receiptHandle:
          "AQEBE/nxp4fh0wBGS6QnjiJoLXzg/6MpgYxfksDW1r0qyA4Cj9M7szZzgw/KgB0otoj8jJhx/Mmzopv6p2nMi0i7wFK9n7PqqErNKtUZcWKOLVlXCMYsaKhBGxiMIs3PNTQEkgeNT6kxBMX9cOoGQFGDSNoXPgSycrREXf4hEx7XZSYa49AH8Z+VtfkmT4S1iSoGUWx/hXgxggAfo+fYwfOBWkpxkhWHwPerlwfFrDshLTSLK0z+MT8EYbl7PYsBe34O+a5lA/8CQo2E8zPIMp5RbJZZDeeS8uKv1QQyQulrVjVmBjid+6RjK++TAQW8xIF+wgQhG4Ty+ewzl+z6T3QUdjmwNdVz9MTYTK3VkKkcj0v9VZ4Zfsut+JRUYpvxFLIjePfPlAjVwC+jwyxKuwuwUoW07au9zPJCyGbZ8lB8MS0=",
      },
      VersionID: 1,
      id: "COP_e2019-038_c2019-039_v001",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "COP_e2019-038_c2019-039_v001",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/COP_e2019-038_c2019-039_v001.xml",
      ],
      wasGeneratedBy: "task_id:5d3ff94c-a8e4-4921-ad3c-bdf212f039d7",
    },
    starttime: "2019-02-07T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/COP/2019/038/COP_e2019-038_c2019-039_v001",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/COP/2019/038/COP_e2019-038_c2019-039_v001",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:17:48.463397Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/COP/2020/041/COP_e2020-041_c2020-041_v001",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/COP/2020/041/COP_e2020-041_c2020-041_v001",
    ],
    creation_timestamp: "2021-03-30T19:17:39.071",
    dataset: "COP",
    dataset_level: "NA",
    dataset_type: "COP",
    id: "COP_e2020-041_c2020-041_v001",
    images: [],
    ipath: "hysds::data/COP",
    metadata: {
      CreationDateTime: "2020-02-10T00:00:00.000000Z",
      ExecutionDateTime: "2020-02-10T00:00:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-COP_e2020-041_c2020-041_v001.xml-20210330T191733.928537Z/output/COP_e2020-041_c2020-041_v001",
      FileName: "COP_e2020-041_c2020-041_v001.xml",
      FileSize: 9604,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/COP_e2020-041_c2020-041_v001.xml",
      ],
      Lambda_trigger_time: "2021-03-30T19:17:33.599548Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:39.062191Z",
      ProductReceivedYear: 2021,
      ProductType: "COP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:26.821Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "lxVhTUKFPJOFytaSZJneJ1j8cFgXb5FmshKSFv1bUoQpAHynCX4r9If1qoThKl6b9myKiDRAoRJqbVuT9ZX+ehJToEg3V8VF",
          "x-amz-request-id": "XE97M0NYEN418Q8G",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "541441c77c461ab6a681efb72a44cbe2",
            key: "gds/COP_e2020-041_c2020-041_v001.xml",
            sequencer: "0060637949646B4113",
            size: 9604,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131850859",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131850857",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:26.821Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"XE97M0NYEN418Q8G","x-amz-id-2":"lxVhTUKFPJOFytaSZJneJ1j8cFgXb5FmshKSFv1bUoQpAHynCX4r9If1qoThKl6b9myKiDRAoRJqbVuT9ZX+ehJToEg3V8VF"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/COP_e2020-041_c2020-041_v001.xml","size":9604,"eTag":"541441c77c461ab6a681efb72a44cbe2","sequencer":"0060637949646B4113"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "52c1822a05d78a4796197836b696b859",
        messageAttributes: {},
        messageId: "8cb81507-f9e1-4db6-a19c-c54c7df7b6c6",
        receiptHandle:
          "AQEBVnpqBkRHiUoG76U78Jkkjl3yfU4ULb+43OQzbHbL/GFC0fLaW+qqoK0vRYmYt3R3DpfJbJBkBHQH8LrDOhnsLivX0MN7FtRUvs0j9IAMhymZ3ZQRlUOcZdd5OwMlI94/vzk83o57QLhYGfroJCbLaMTQVHLDRMd1GhMNI0SKFI0aO7+IQzxgBBdjYH7kdMl+Kt0TocZDPmJnGPcyNSZtBA8NL359njDDpgRuezg7B3//F8aqCN7VdfLQJ2/U+o5rurXnuG31AlMMGGnYYVQ2BmSrIslVhALcfFJEbXXFqMlkF+ZlMUEIgnQdGRCytwTvNcwI6fAlPJtvgXRMNqwgL2q+r/eokFq+8sk7BD5/6WbjcMDYI/Do3FNG4G/XPoMs3rOJ7m5tnpIqQjjHg6S1pQF3wmmuWyPcgIfmFae6C9U=",
      },
      VersionID: 1,
      id: "COP_e2020-041_c2020-041_v001",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "COP_e2020-041_c2020-041_v001",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/COP_e2020-041_c2020-041_v001.xml",
      ],
      wasGeneratedBy: "task_id:256bf70a-0dc1-427e-8527-6c3cf3ef0932",
    },
    starttime: "2020-02-10T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/COP/2020/041/COP_e2020-041_c2020-041_v001",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/COP/2020/041/COP_e2020-041_c2020-041_v001",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:17:59.350526Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/COP/2020/041/COP_e2020-041_c2020-041_v002",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/COP/2020/041/COP_e2020-041_c2020-041_v002",
    ],
    creation_timestamp: "2021-03-30T19:17:49.092",
    dataset: "COP",
    dataset_level: "NA",
    dataset_type: "COP",
    id: "COP_e2020-041_c2020-041_v002",
    images: [],
    ipath: "hysds::data/COP",
    metadata: {
      CreationDateTime: "2020-02-10T00:00:00.000000Z",
      ExecutionDateTime: "2020-02-10T00:00:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-COP_e2020-041_c2020-041_v002.xml-20210330T191734.527067Z/output/COP_e2020-041_c2020-041_v002",
      FileName: "COP_e2020-041_c2020-041_v002.xml",
      FileSize: 5252,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/COP_e2020-041_c2020-041_v002.xml",
      ],
      Lambda_trigger_time: "2021-03-30T19:17:34.291588Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:49.083336Z",
      ProductReceivedYear: 2021,
      ProductType: "COP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:27.413Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "5nLdLKod4b+yLJwD9m4TiG6ceZoYZFVndmeyrXp37bYV1+XrwLIWxxK1F/r8ncFURGWqK7dEWeCEtVbwN6lXYLB3oRLO6zWr",
          "x-amz-request-id": "6QK03VT0A5TQ4NG5",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "6fcc86e1de597e0cc22cc3507c928f98",
            key: "gds/COP_e2020-041_c2020-041_v002.xml",
            sequencer: "006063794A1DADC3E9",
            size: 5252,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131851280",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131851279",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:27.413Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"6QK03VT0A5TQ4NG5","x-amz-id-2":"5nLdLKod4b+yLJwD9m4TiG6ceZoYZFVndmeyrXp37bYV1+XrwLIWxxK1F/r8ncFURGWqK7dEWeCEtVbwN6lXYLB3oRLO6zWr"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/COP_e2020-041_c2020-041_v002.xml","size":5252,"eTag":"6fcc86e1de597e0cc22cc3507c928f98","sequencer":"006063794A1DADC3E9"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c936eec428d2f45fecd8824387d22652",
        messageAttributes: {},
        messageId: "57f26a46-0bec-493d-b5c8-3a17d0c7a7c5",
        receiptHandle:
          "AQEBf4EULKlw//XPMBlRKwTsqADu68/ZNU1Vi9rIxv9sVm258hp0b1kjfCwFXFk8YVhEJn5RKx8ixRrM/tYENGPSMPbE140YXS8wZ45/INhvWAMsv4N33XauDY5YWA7zgI2S91Jw0Ogtxl0Xb9sfcBJsUf4zLBc9cTjRuQE9azIAzOvgkQA3xFs4RwkWNWBPaAYLeTX8KPlSj3osxtPu/Ws07fS5Zn7VIQwgvHfDd0UsBxy/6AUQxeKJkZxD41yamdctcGln81YxxEws/3GwqsG9Z1LiuNgdYjdTdVfgVszIZzzwcivRAXPEqaw0CPZGaZmJmKcV0sSQlZjqzQuYzBOu1mGYHPdhcucI8sCE0g3WGKBxU1rJUBuyv6GxZ7bBE8ahpvasefEar4dnm1jPvggPWbxf4Urptr0xB9VW7Ehi/5w=",
      },
      VersionID: 2,
      id: "COP_e2020-041_c2020-041_v002",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "COP_e2020-041_c2020-041_v002",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/COP_e2020-041_c2020-041_v002.xml",
      ],
      wasGeneratedBy: "task_id:0af7701e-d505-4b8e-8dc9-d82a35cc530d",
    },
    starttime: "2020-02-10T00:00:00.000000Z",
    system_version: "2",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/COP/2020/041/COP_e2020-041_c2020-041_v002",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/COP/2020/041/COP_e2020-041_c2020-041_v002",
    ],
    version: "2",
  },
  {
    "@timestamp": "2021-03-30T19:18:47.693813Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/SCLKSCET/LRCLK/NISAR_198900_SCLKSCET_LRCLK.00003",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/SCLKSCET/LRCLK/NISAR_198900_SCLKSCET_LRCLK.00003",
    ],
    creation_timestamp: "2021-03-30T19:18:37.854",
    dataset: "SCLKSCET",
    dataset_level: "NA",
    dataset_type: "SCLKSCET",
    id: "NISAR_198900_SCLKSCET_LRCLK.00003",
    images: [],
    ipath: "hysds::data/SCLKSCET",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_198900_SCLKSCET_LRCLK.00003-20210330T191746.8537Z/output/NISAR_198900_SCLKSCET_LRCLK.00003",
      FileName: "NISAR_198900_SCLKSCET_LRCLK.00003",
      FileSize: 624,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_198900_SCLKSCET_LRCLK.00003",
      ],
      Lambda_trigger_time: "2021-03-30T19:17:45.671163Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:37.849408Z",
      ProductReceivedYear: 2021,
      ProductType: "SCLKSCET",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:41.464Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "cBcdOXGeQeWbXKEhyLmOYPdjfEZLoWxbSDj1sot4ZLkFOzF/xdJgBXu/YViQAmPz4DM+qRnC+RJfDUU8pRkAzBj1+5V3lYwv",
          "x-amz-request-id": "CQM0P2PFCA3BT2KP",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "850707ddf19a507985cb90a9e1eda433",
            key: "gds/NISAR_198900_SCLKSCET_LRCLK.00003",
            sequencer: "006063795861E0E6D3",
            size: 624,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131865574",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131865574",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:41.464Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"CQM0P2PFCA3BT2KP","x-amz-id-2":"cBcdOXGeQeWbXKEhyLmOYPdjfEZLoWxbSDj1sot4ZLkFOzF/xdJgBXu/YViQAmPz4DM+qRnC+RJfDUU8pRkAzBj1+5V3lYwv"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_198900_SCLKSCET_LRCLK.00003","size":624,"eTag":"850707ddf19a507985cb90a9e1eda433","sequencer":"006063795861E0E6D3"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "a9758a6e8fe3bfbdcb249e2564cdfa4c",
        messageAttributes: {},
        messageId: "07e3bc96-2050-45c5-8432-254cc857032d",
        receiptHandle:
          "AQEBF5FUmtwDJS13PBMLVOX2urqr1bL4lddmJF9F/n/lIi9aCfEgZx2GaQYi14Ts+YlaMFEQyhULzOF6DuhVE0ItpEjUEtbw89Ci/2BlpuWS1CAj/h/yxesdjb0qWmZGkX3KADGbbzrSRb8wPveDQhApY9p4RqprjFD8A3rfy9NBbd/frQlJJtF8V2rKHQzpIh9/lC0W9I9nmLXRbjRbOW4zXXKw7A6DL/J7GLna7QNSVwQLQyJQgbCXI++WyxLPK3YzXmLY6PwZaTM06cP3VWQPjI7qf48AkFfBxOpEUH4Has3jKYgIjl7/KxsFXxtAxjAdsPXHpb6sNhRHpAGW6k6/VJLXaoOLzPIyfePM1TEzofIIyA/xpsrY9ScDtnHCsjV6O1rBGEvgJuHlsK8br0eTuY6u5XXFNqma5dqbiXeMSeU=",
      },
      SpacecraftID: 198900,
      Type: "LRCLK",
      VersionID: 3,
      id: "NISAR_198900_SCLKSCET_LRCLK.00003",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_198900_SCLKSCET_LRCLK.00003",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_198900_SCLKSCET_LRCLK.00003",
      ],
      wasGeneratedBy: "task_id:74216fc1-f196-437b-89f4-5002d74a0b0a",
    },
    system_version: "3",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/SCLKSCET/LRCLK/NISAR_198900_SCLKSCET_LRCLK.00003",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/SCLKSCET/LRCLK/NISAR_198900_SCLKSCET_LRCLK.00003",
    ],
    version: "3",
  },
  {
    "@timestamp": "2021-03-30T19:18:35.471104Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/FOE/2020/06/03/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/FOE/2020/06/03/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
    ],
    creation_timestamp: "2021-03-30T19:18:27.568",
    dataset: "FOE",
    dataset_level: "NA",
    dataset_type: "FOE",
    endtime: "2020-06-10T22:59:42.000000Z",
    id: "NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
    images: [],
    ipath: "hysds::data/FOE",
    metadata: {
      CreationDateTime: "2020-05-04T14:50:19.000000Z",
      Fidelity: "FOE",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942.xml.gz-20210330T191743.617740Z/output/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
      FileName:
        "NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942.xml.gz",
      FileSize: 356,
      GranuleName: "NISAR_ANC_J_PR_FOE_20200603T225942_20200610T225942",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942.xml.gz",
      ],
      Instrument: "J",
      Lambda_trigger_time: "2021-03-30T19:17:43.357792Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:27.557103Z",
      ProductReceivedYear: 2021,
      ProductType: "FOE",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:39.147Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "SbcmM/kU92lAtFVpnlUCt2p9zq2JsM/ULI7PFRTjQ1vlSFySGZfuTR+S/gE1GBouFvwMXDpM9gsZW367ci2XjwdolMHZTMbM",
          "x-amz-request-id": "F5JQH87HC0XDKCBN",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "12abe954476e0a7296640ea5c267cedc",
            key:
              "gds/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942.xml.gz",
            sequencer: "0060637955F89F237E",
            size: 356,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131863256",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131863255",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:39.147Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"F5JQH87HC0XDKCBN","x-amz-id-2":"SbcmM/kU92lAtFVpnlUCt2p9zq2JsM/ULI7PFRTjQ1vlSFySGZfuTR+S/gE1GBouFvwMXDpM9gsZW367ci2XjwdolMHZTMbM"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942.xml.gz","size":356,"eTag":"12abe954476e0a7296640ea5c267cedc","sequencer":"0060637955F89F237E"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c9304604eee0c2433fb40f0c7a31a373",
        messageAttributes: {},
        messageId: "18863889-cf5f-4692-9164-9876e0db3181",
        receiptHandle:
          "AQEBxSImsOxUIcT3blhLXcQh9wUfEcOmhrbFWY3bbY73+yWL7MCydz7Njqj2SD8yE9QOXTbHMgQKj9XeSPbpbYZon8KKR4/Wyq4cN3tQtdHA9gW296F8DOKvb78c2JfniJ/+NQS05Lhkbmqo8267OzM7R5O96ydd+wxbw9pOieHsmotGkLl3dhPNsKBHb530PUFnn6/RIGGOlgkoTDxTA9N7fFaGjoxVXnirHuSAxrPt8A/nqTWr6wKsvPelmU5BQS4kas+4jT242VJncRyaUOuE+iRcD3BixeR+0E44/oSpBS3M2ukXye0I9HJmde+v2erx0TfGBBM0iPtrGHMMZUYw64LEnTCmU3wv7Piu+KmNu3s5uWuoUCkln3LNBorlV4uVAGV+bx3G8JGHL5XY50tWZ0d0yGZe0ID3nvBhZi/dBqo=",
      },
      ValidityEndDateTime: "2020-06-10T22:59:42.000000Z",
      ValidityStartDateTime: "2020-06-03T22:59:42.000000Z",
      id: "NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
      restaged: false,
      tags: ["ISL"],
    },
    objectid:
      "NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942.xml.gz",
      ],
      wasGeneratedBy: "task_id:29a2bf54-80f5-4150-adba-c86913b48ba9",
    },
    starttime: "2020-06-03T22:59:42.000000Z",
    system_version: "1",
    temporal_span: 7,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/FOE/2020/06/03/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/FOE/2020/06/03/NISAR_ANC_J_PR_FOE_20200504T145019_20200603T225942_20200610T225942",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:48.897479Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/FRP/2018/06/04/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/FRP/2018/06/04/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
    ],
    creation_timestamp: "2021-03-30T19:18:39.387",
    dataset: "FRP",
    dataset_level: "NA",
    dataset_type: "FRP",
    endtime: "2018-06-05T00:49:52.000000Z",
    id: "NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
    images: [],
    ipath: "hysds::data/FRP",
    metadata: {
      CreationDateTime: "2019-09-07T14:50:12.000000Z",
      Fidelity: "FRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952.xml-20210330T191747.142168Z/output/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
      FileName:
        "NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952.xml",
      FileSize: 4368,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952.xml",
      ],
      Instrument: "J",
      Lambda_trigger_time: "2021-03-30T19:17:46.894070Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:39.379221Z",
      ProductReceivedYear: 2021,
      ProductType: "FRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:42.820Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "LVSAVm3HiofGwhfLaeoH2ZQIOvfoooOEzAnxUnsJQgmqyC3yhunA01X1rom5BX1sS8A/Xkio0N2qNPS1EeQVEYzz9GIiFtje",
          "x-amz-request-id": "JCNCM3J5MYP3C1B3",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e9beb7ece6ec519dcf5a0e1309036033",
            key:
              "gds/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952.xml",
            sequencer: "0060637959B69466E2",
            size: 4368,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131866823",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131866809",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:42.820Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"JCNCM3J5MYP3C1B3","x-amz-id-2":"LVSAVm3HiofGwhfLaeoH2ZQIOvfoooOEzAnxUnsJQgmqyC3yhunA01X1rom5BX1sS8A/Xkio0N2qNPS1EeQVEYzz9GIiFtje"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952.xml","size":4368,"eTag":"e9beb7ece6ec519dcf5a0e1309036033","sequencer":"0060637959B69466E2"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "808113787d5e8c460dc7bb3fdb472e39",
        messageAttributes: {},
        messageId: "73020ec8-47a6-48cb-b971-6e5247d31e00",
        receiptHandle:
          "AQEBA61myrBIlCpN8nrmL/CGOCJql4RZ8svKw4IAm7pw87L1+z9imnsIQZ2fIoM6BPJu4L4P851p4ImKrFWcG1IBwNn6Tw3lKl3qIMR8j/nAXxcO2b5EFrFcx9oXYwVDi47hrTtsg1vOwMXiUy/xGe8pJMr8G48/ualmaNDO/QRV7jqOgEhuMJXMbFUWaYzU/QnolM6Rl1monFsntKAxMdiP7VH8SF7aXE0rFS3v0SqZexnCPZcdOcOgxNaAzP8NTz0n6sJrYUjpKg4dzx+diwttvU9LL/Sm5AcIgAvVuINr7/63HILIYCgDIK6S6NXJ8Ws1/7UV7MD4dRWQyzaE40AqvSS+fUEbUJBtAemw1n7pJ14Ti//aiigvpfdyhz9/AQWc8+WBHwHKJ6YyrrGjGAfJ8lOrSYeIa80P1PnGlJ/YM80=",
      },
      ValidityEndDateTime: "2018-06-05T00:49:52.000000Z",
      ValidityStartDateTime: "2018-06-04T14:59:43.000000Z",
      id: "NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952.xml",
      ],
      wasGeneratedBy: "task_id:ba38c976-deaf-49a1-b42a-6473c91061c1",
    },
    starttime: "2018-06-04T14:59:43.000000Z",
    system_version: "1",
    temporal_span: 0,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/FRP/2018/06/04/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/FRP/2018/06/04/NISAR_ANC_J_PR_FRP_20190907145012_20180604145943_20180605004952",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:52.979382Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/FRP/2018/06/03/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/FRP/2018/06/03/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
    ],
    creation_timestamp: "2021-03-30T19:18:43.413",
    dataset: "FRP",
    dataset_level: "NA",
    dataset_type: "FRP",
    endtime: "2018-06-03T22:55:42.000000Z",
    id: "NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
    images: [],
    ipath: "hysds::data/FRP",
    metadata: {
      CreationDateTime: "2019-09-05T14:50:19.000000Z",
      Fidelity: "FRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542.xml-20210330T191749.298404Z/output/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
      FileName:
        "NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542.xml",
      FileSize: 2481,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542.xml",
      ],
      Instrument: "L",
      Lambda_trigger_time: "2021-03-30T19:17:49.050785Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:43.403620Z",
      ProductReceivedYear: 2021,
      ProductType: "FRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:44.706Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "mL3wLvPItjdejykm1or2r32YqMKLHfxN5rgFxIQ48yI31/OeY68+j3lP5Afg8RiH3f2LhxTLNYOI3VWfZjlUgVcICXroXeN6",
          "x-amz-request-id": "1WHJBAG56ZPCPRXE",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "344450dd79e872474032423a6006e685",
            key:
              "gds/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542.xml",
            sequencer: "006063795BA0EF401F",
            size: 2481,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131868951",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131868950",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:44.706Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"1WHJBAG56ZPCPRXE","x-amz-id-2":"mL3wLvPItjdejykm1or2r32YqMKLHfxN5rgFxIQ48yI31/OeY68+j3lP5Afg8RiH3f2LhxTLNYOI3VWfZjlUgVcICXroXeN6"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542.xml","size":2481,"eTag":"344450dd79e872474032423a6006e685","sequencer":"006063795BA0EF401F"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "d2975cfa8aab0a5f2c5e549f5d52b0df",
        messageAttributes: {},
        messageId: "5a17b45e-2ef6-401e-b152-b3489a0ca176",
        receiptHandle:
          "AQEB6AtvWLdaHwJGyGPT4852LWAL0YcyiRBju51bPf8v4/fwBaFzleXwKo1mXOSPdzFp2kx+hcyX2bUMb2MI6xlWW6frTGkavLf449si4r52CEjItQGSTd5xNMmZO2w5uljNGUccPPsIv6gkVnrU4ivZj1Re5SV1ikhSvf4STQYyseKdB87Ue4ih54+rDvTRoLdYRdCMKXCeIwiGBbIyEttw5hGxZ/tsde2n525Ac0Q7RJ+QjQNAj7NlteBP9iVwbffcOMO2xcKq4y6SpHCekzgKhn1uH8DtcW3bfs88srjLsloVIVWBQsxOmgJIIqqWoUpyivZR45U/+xnVw1YnPDZL+99UBR48qEEmN8mwbENBSzxI2xYxVYi1zsMY2Jcf+gOTaIyOQPdDCjjx3lkvgBvPC6O69Cp9XF5GUXy0ZpZswMA=",
      },
      ValidityEndDateTime: "2018-06-03T22:55:42.000000Z",
      ValidityStartDateTime: "2018-06-03T12:59:41.000000Z",
      id: "NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542.xml",
      ],
      wasGeneratedBy: "task_id:fa5c8efe-c2c7-46a7-bb37-987094553250",
    },
    starttime: "2018-06-03T12:59:41.000000Z",
    system_version: "1",
    temporal_span: 0,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/FRP/2018/06/03/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/FRP/2018/06/03/NISAR_ANC_L_PR_FRP_20190905145019_20180603125941_20180603225542",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:19:03.552759Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/FRP/2018/06/06/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/FRP/2018/06/06/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
    ],
    creation_timestamp: "2021-03-30T19:18:53.979",
    dataset: "FRP",
    dataset_level: "NA",
    dataset_type: "FRP",
    endtime: "2018-06-07T00:49:42.000000Z",
    id: "NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
    images: [],
    ipath: "hysds::data/FRP",
    metadata: {
      CreationDateTime: "2019-09-06T14:50:11.000000Z",
      Fidelity: "FRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942.xml-20210330T191751.459431Z/output/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
      FileName:
        "NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942.xml",
      FileSize: 1891,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942.xml",
      ],
      Instrument: "S",
      Lambda_trigger_time: "2021-03-30T19:17:51.131084Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:53.969837Z",
      ProductReceivedYear: 2021,
      ProductType: "FRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:46.499Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "rEbivKE3vDTcpqE/y5/+h11XT1OHHeX3mhtJqHxhPEWnB9cJHsaYzC8GW5o/xPmqw1L/yZ+kpXE9Hu8zVlrGLygmnz4CufPg",
          "x-amz-request-id": "PYX1TGQ8GPR7QBM4",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "c36a7d6af0d163796663bbe12aa713ae",
            key:
              "gds/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942.xml",
            sequencer: "006063795D80A53DA8",
            size: 1891,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131871034",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131871032",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:46.499Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"PYX1TGQ8GPR7QBM4","x-amz-id-2":"rEbivKE3vDTcpqE/y5/+h11XT1OHHeX3mhtJqHxhPEWnB9cJHsaYzC8GW5o/xPmqw1L/yZ+kpXE9Hu8zVlrGLygmnz4CufPg"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942.xml","size":1891,"eTag":"c36a7d6af0d163796663bbe12aa713ae","sequencer":"006063795D80A53DA8"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "4f354ca236e93af532392891595d8d9f",
        messageAttributes: {},
        messageId: "eb946bd2-1904-4125-b9e3-0c8156c3818b",
        receiptHandle:
          "AQEB5BtBTVio8CepeDK8cv2LRdSnBm7qHEWcE+BtWWHMNYXzZwkCWQuj9ns2bi2/VwWoopCf5JeSJnhVuboJsVN1yPzo5NdIoUT+rfhaXhmKzfOcRXZUU6xynps9TIbjd1mp0Xj+tOUqvv8ICPeFF51fueouxASy/FyqHa6PPhBYYefCWqGvmPHM2dVfPVcSNUYbx7qkaa9to2NPivvOsp0QAXmW0p+pbeHgd1nXbLNcq560CEY7Hlo3fM3VSKUGpRGcqjD3x6ogohoKDEj9i85HZDRbzpx1XApxTqAE//DV/DvePiiBjslJAy3mALy68KgRvGeCCO93JQmraLw7Kg/yAbCspPX4OLFaDPX8LuvJOvalJDNLI+HQ2xIrW6Q3aCFG2Na3qTazt2VcRWcaFtwkmkuiR4CbecNDOCsZgeGsHyc=",
      },
      ValidityEndDateTime: "2018-06-07T00:49:42.000000Z",
      ValidityStartDateTime: "2018-06-06T13:59:42.000000Z",
      id: "NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942.xml",
      ],
      wasGeneratedBy: "task_id:90c6b205-e38b-48c1-b2b0-7408b0a22758",
    },
    starttime: "2018-06-06T13:59:42.000000Z",
    system_version: "1",
    temporal_span: 0,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/FRP/2018/06/06/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/FRP/2018/06/06/NISAR_ANC_S_PR_FRP_20190906145011_20180606135942_20180607004942",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:35.694333Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/MOE/2022/01/08/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/MOE/2022/01/08/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
    ],
    creation_timestamp: "2021-03-30T19:18:27.741",
    dataset: "MOE",
    dataset_level: "NA",
    dataset_type: "MOE",
    endtime: "2022-01-08T23:59:42.000000Z",
    id: "NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
    images: [],
    ipath: "hysds::data/MOE",
    metadata: {
      CreationDateTime: "2022-01-04T14:50:19.000000Z",
      Fidelity: "MOE",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942.xml.gz-20210330T191744.502330Z/output/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
      FileName:
        "NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942.xml.gz",
      FileSize: 445,
      GranuleName: "NISAR_ANC_J_PR_MOE_20220108T050942_20220108T235942",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942.xml.gz",
      ],
      Instrument: "J",
      Lambda_trigger_time: "2021-03-30T19:17:44.254667Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:27.730286Z",
      ProductReceivedYear: 2021,
      ProductType: "MOE",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:39.742Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "OjtEhqNnAUypiDIm5aGXj053/F6d1maLlYz5Yqy4WXeINKFoKi+iTcrTWAwaV6tD9XdOJYGfWfvkCfTEoo+CIfWj3X2I0tH0",
          "x-amz-request-id": "WJBCAB0JT57X36EG",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "d569ba05dfdc4e7ca52ad43089e714e6",
            key:
              "gds/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942.xml.gz",
            sequencer: "00606379569785CFFD",
            size: 445,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131864187",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131864186",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:39.742Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"WJBCAB0JT57X36EG","x-amz-id-2":"OjtEhqNnAUypiDIm5aGXj053/F6d1maLlYz5Yqy4WXeINKFoKi+iTcrTWAwaV6tD9XdOJYGfWfvkCfTEoo+CIfWj3X2I0tH0"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942.xml.gz","size":445,"eTag":"d569ba05dfdc4e7ca52ad43089e714e6","sequencer":"00606379569785CFFD"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "cf8d648ca8c91c06ecf2c355ef3369d9",
        messageAttributes: {},
        messageId: "0f1daec2-81e3-4e10-8d1c-617554591e83",
        receiptHandle:
          "AQEBbJ4FYxSFPQbhTJkC4yDhoWX0+BwhVCVPdqYjBaU3TU91+2XbXJlBDtBVUXfQr5ARZuwcX9FIQGVUA58KwIvuE7AJfF9sBfJsDzCxWbulOqDD/QDvH2vxmNnLMD4S1xOnpfLe4QBTRWEiuEgZqEjYIFAmdNeGrsiHD0iHHmqivSBzpY5YhI68ZDzU+pWAZo+J833JGLmRSy085NyrrukgBsxWjdomlIMrALcNsOr9/7ldmj4ThrOQ3/b6/sGIl1M/rhNC9lkcfMUYuXUtxw+ESnwLYDxYdyAxPRz9/EB2nZ5dTxj+MwVFiO2P3ykD0vJ7GpZSYP3MF0kxKEpdDRUguQM8V9gNrdMdGLi5pLcpFq8I++SjiiroLkAGp9OV354DgEIE92Nw3EVacXGC6ktLNnXsgmo4587CZ9UEFlyqvOw=",
      },
      ValidityEndDateTime: "2022-01-08T23:59:42.000000Z",
      ValidityStartDateTime: "2022-01-08T05:09:42.000000Z",
      id: "NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
      restaged: false,
      tags: ["ISL"],
    },
    objectid:
      "NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942.xml.gz",
      ],
      wasGeneratedBy: "task_id:072c8ffb-c908-4646-858b-a684a7c60a9e",
    },
    starttime: "2022-01-08T05:09:42.000000Z",
    system_version: "1",
    temporal_span: 1,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/MOE/2022/01/08/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/MOE/2022/01/08/NISAR_ANC_J_PR_MOE_20220104T145019_20220108T050942_20220108T235942",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:15.656323Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:22:08.230",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:10.770282Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:10.770262Z",
    daac_submission_timestamp: "2021-03-30T19:46:10.769997Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 49,
      FileCreationDateTime: "2022-01-08T09:03:16.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/22/ingest-staged-NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24-20210330T192103.775999Z/output/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
      FileName:
        "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:03.512021Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:08.219058Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 48,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:21:00.959Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "vQknFznsdKSR/hDiC+wni1vMW/MwTjUyv9CmEuMaenCkiep97Z/0/TN9XDFQarqhfafdpEr7YL4060SZZ6w4ohADQSRvQZUJ",
          "x-amz-request-id": "1NEMM2P2XG2300JR",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24.qac",
            sequencer: "0060637A1E1A7F48F3",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132063091",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132063066",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:21:00.959Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"1NEMM2P2XG2300JR","x-amz-id-2":"vQknFznsdKSR/hDiC+wni1vMW/MwTjUyv9CmEuMaenCkiep97Z/0/TN9XDFQarqhfafdpEr7YL4060SZZ6w4ohADQSRvQZUJ"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A1E1A7F48F3"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "28d180c67da26379f9fda2b1713e3176",
        messageAttributes: {},
        messageId: "b7c2a8a6-68d1-415c-bbc8-ad6816a56752",
        receiptHandle:
          "AQEBjWrrNNH1fNnes4/byjSatSusKVTZVIa4Znd4m0MDuuaLpZ2nAsGt5ndC5dYibVVzOBmsXveIJjzy64nhVlBMuJH2p19GbXYCCwrI8jcB3WIEPyy8x6cJtwlx+pyXLWJws+H0QIAxKp8LHDE0EoAztFM6gYdcq5gEXFjr4r8RR1BpfivLzY64ei9PJZgWeXfv/tnfJc+bM30YsLyQ6MMGUlJxk2UAtxAiCz4j7t8Fpxlnq/kddaNIjBrV0I3EN6l0oFhzTzD9FNU6HUADV9pOhUIfBvuySRX3T3j/5r1+v7QCPmF37OOz7mw2Gegq4vFWGeTywRAaBC6Z+RjB073kI9XBb4tS9K5HbRYFfgmxAwXMK0yyNJnCh47149IbsUgQWNTlsgSw0ReG/wRMHZD9ksTvthw1ugCp1Aa45NIFiRQ=",
      },
      Station: "PA",
      VCID: 24,
      id:
        "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:7e64cc12-6418-4947-bec8-215524cf2e1e",
    },
    starttime: "2022-01-08T09:03:16.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:25.112687Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:53.224",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:19.514928Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:19.514903Z",
    daac_submission_timestamp: "2021-03-30T19:46:19.514467Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 48,
      FileCreationDateTime: "2022-01-08T07:56:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24-20210330T192031.416872Z/output/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:31.139007Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:53.216373Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 47,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:29.025Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "3poEnLwXOVTIlatAKODvS1A56EHYGpa8pl5vjPrH2VTxm/qat3maVC3aQfourunOeE2u8ujITVhMDrAtbPYiGLsgTMEo0PWm",
          "x-amz-request-id": "3MV6X4YZTT6WZAMZ",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24.qac",
            sequencer: "00606379FDBE57034E",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132031059",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132031028",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:29.025Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"3MV6X4YZTT6WZAMZ","x-amz-id-2":"3poEnLwXOVTIlatAKODvS1A56EHYGpa8pl5vjPrH2VTxm/qat3maVC3aQfourunOeE2u8ujITVhMDrAtbPYiGLsgTMEo0PWm"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379FDBE57034E"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "dc085a29ef1096c7f98ff625a2477438",
        messageAttributes: {},
        messageId: "4dde13e5-22eb-4334-b644-3a70dde81dd2",
        receiptHandle:
          "AQEB64oxcYzFAlZk8uMhYCRFsMNNn1m9WaEcD16zJs8EgzSRRq91sAmEp8vdWyvphp2esxS04P0GI8iX3TbU2KZMO7p4cpfzIoJj2eZSFIPp+dfa4kqqrEPwSSDohUvjzzV5toNSSILzQIxnpaQl8skoxs38gq2pGY4F9Diz9+asEWDEoYpQFhtq028bICmzJAC+vhQpFv9sEBBas7ygLOO0v8drwzJEt+rtmPmvhsK+6A35UdRPEkpTvvulPGFZCZSYXiB4WsJ03YgonTs2uZbRKPhZO5q+RR3P2XVUxdoWcNiwns/eSyAstWUOy7YLSI6xqcM9xgFFEdgZrFf3cvbKZDiOwhkvLY5t0gTVkc7oUqhBHIUe5Mp+7mTxiuEafsQYttyjJlAeM3QY/l3NXvkQO2coHEKoDGxHcXgE7cb93ks=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:db1772fa-aaea-49e1-8eb2-2a2f74a2a53e",
    },
    starttime: "2022-01-08T07:56:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:31.449721Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:35.867",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:23.694061Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:23.694042Z",
    daac_submission_timestamp: "2021-03-30T19:46:23.693788Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 14,
      FileCreationDateTime: "2022-01-08T07:34:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24-20210330T192021.712090Z/output/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
      FileName:
        "NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:21.438649Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:35.856318Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 13,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:19.449Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "M1u2fkSIVQorqqaVi1BdS4YxZW8SRhx77CvcBYDWkX6LzGELPsfLeX3FF8PK5hJG7mP4c4l7P/AEjkQhwuNmxpFJyD4AYvMI",
          "x-amz-request-id": "XQ16G11V16Q65W1A",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24.qac",
            sequencer: "00606379F40B4D69CD",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132021355",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132021354",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:19.449Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"XQ16G11V16Q65W1A","x-amz-id-2":"M1u2fkSIVQorqqaVi1BdS4YxZW8SRhx77CvcBYDWkX6LzGELPsfLeX3FF8PK5hJG7mP4c4l7P/AEjkQhwuNmxpFJyD4AYvMI"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379F40B4D69CD"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "9569241d587f7f6c264b50e80f374fa0",
        messageAttributes: {},
        messageId: "342cab4c-87a9-42ba-befa-7e34379d6019",
        receiptHandle:
          "AQEBmktFomPqbUjXSUw4RJTTA/xxwBBdxAdysNkOasukMu4kXQ4DnBsmdLc9ajHnZeOeZPm86qaSQTZUoGw7pL9kV7aaxhD4jwd8u2V7ffthhRexkxCZmlTjq6es28IiQFOS3ecC/bmRMMF2m3InX7s78UWTsgBNMsWwVaLiy0/EJ1BxtyjLBwWToumImkWHnt3dWVG39QldqdckX20LWugMmTvmiAGMMZQryZ2hiSWkDeKjd8APVlUveSFVKdGrmgc/VfZpAGQybkitYyTQvl2A6ovrasgej2spa/B/QvywPjLD+79M0fvj3lNxG8Hflke1Uosg5OHCkCvSQshd1gOoHAKGSQB7OWAJDZir1afbg+Vph59qfqSOv9X9TTgEieGhuNzcRQ2KL+Eii3B3KlJVfun7GUzNpMwc4nsScj3x2uU=",
      },
      Station: "ASF",
      VCID: 24,
      id:
        "NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:cfe6d5ea-058a-4844-bcf8-76d7946bd683",
    },
    starttime: "2022-01-08T07:34:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:37.818135Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:54.512",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:27.880210Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:27.880187Z",
    daac_submission_timestamp: "2021-03-30T19:46:27.880127Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 27,
      FileCreationDateTime: "2022-01-08T08:09:36.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24-20210330T192030.284216Z/output/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:30.016867Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:54.501760Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 26,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:27.765Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "yUdg5Wijg7JXaZglbegjEfYI1zON0Qr1BCkuJNV6OwdUXdn4oEoNHWiqWgZpY4X8aGfqcWTNK+2ASxBQszs4bb58PkyisogJ",
          "x-amz-request-id": "DSGT15CKE5R8DWTD",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24.qac",
            sequencer: "00606379FC7C6E5653",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132029889",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132029888",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:27.765Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"DSGT15CKE5R8DWTD","x-amz-id-2":"yUdg5Wijg7JXaZglbegjEfYI1zON0Qr1BCkuJNV6OwdUXdn4oEoNHWiqWgZpY4X8aGfqcWTNK+2ASxBQszs4bb58PkyisogJ"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379FC7C6E5653"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "d0cc1ec71c47fe07239445f701f6e282",
        messageAttributes: {},
        messageId: "7cea3a53-7b3c-4fbd-8223-3d6a3f0354ce",
        receiptHandle:
          "AQEBDpGfVsIBkUN4cFCXAMbo6iJG5KEbAs3k9ntgPgWvaKBOLUhwBKeed5FVZrt+GYhLo3UUXYptH9b7aoA2CiIONYuckysx7Tsai3kvxDPAbWpKomsP+xLRVv33b4Zh0hlfGlqHyDmjI6R9VnhyVLPFQgHWc+BItPEezrlrvcHyeYBO2EJ62BfHglWuK0Tu9ZvvSsKS5d7ccXzRulA1CHSopRCVaWrD04l8DpJoSdZ3l3DlWREdpW5tfQHzcCu1JiVLGEaAb5dkzYkR192P7y6QE/KxUoWS3AZ3K3UmfaaPkGQvaiZezWJiyG+0k/UMvKW/z9WHAs9Hd8wwxtcdoko/QJEn8ICteO11vfzB8oeUbMzIzei+DRV/FuVFF+HLY5EPcJB1Kd5l5BjGh00f9D8g7MQGSLYIKdBJR2jD9kq7bq0=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:3f17c721-20e0-4286-aafb-8f3195d97472",
    },
    starttime: "2022-01-08T08:09:36.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:30.307098Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:22:03.624",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:23.353496Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:23.353474Z",
    daac_submission_timestamp: "2021-03-30T19:46:23.353159Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 43,
      FileCreationDateTime: "2022-01-08T09:03:16.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29-20210330T192101.334939Z/output/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
      FileName:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:01.109948Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:03.614126Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 42,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:58.535Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "UN5fblC71sNKlqj6yZkfh/AZDkdpimISz/z2DdKd6MF5CcHDHWV2KKpcWh+yGOK1o6SOwdkDHtcLtgJgPigagfw/STT8lMqi",
          "x-amz-request-id": "8BKSWA7AVX9AJKJK",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29.qac",
            sequencer: "0060637A1B8BB34341",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132060989",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132060988",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:58.535Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"8BKSWA7AVX9AJKJK","x-amz-id-2":"UN5fblC71sNKlqj6yZkfh/AZDkdpimISz/z2DdKd6MF5CcHDHWV2KKpcWh+yGOK1o6SOwdkDHtcLtgJgPigagfw/STT8lMqi"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A1B8BB34341"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "f3051cff39323e7069dd0dda72dd16e0",
        messageAttributes: {},
        messageId: "3d52695b-fe4c-49e0-9be9-5f68e63380af",
        receiptHandle:
          "AQEBROXuWnQ+Mp407WRUbmlAVZ+qe8GDtn+WytVH5W4yq0JyCtfkiLGycTkgSEn95pri8LbbZU3vAb8m2Ov78Msiur9vvuvaZ6GvuULOarFUVNKtKaMml2U9Vzg1cDIzJKZYruhzr9R6zEEZxG3LGol4o07yGn90zrq4O7SNULoZpzk9a3a9/evPaJWcaO6ArC5gF5rC5KiC6/hWn4ej+obRzbRddWAa1bm3GmgSldYm+K8YKji4rzMEbM7Ynw67mADmzJEkgiQSF1Ssr2LiWRhHpz6CjWthyr6hjDGV2NQ7odA4JIUrfy96pKxhW/L7fmWLA2g8os7memCKN6eZsM+u98JOOJ99Oh+Qm+HBvBPqPb898CNaQKjzFd/XbNd6EMpC3YupYlUe+/1z0kapOBs4G9GqCeCvQr6n4yen/2t6C44=",
      },
      Station: "PA",
      VCID: 29,
      id:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:0e7ebd68-0857-48e1-b495-2e7d2b420811",
    },
    starttime: "2022-01-08T09:03:16.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:35.095319Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:33.984",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:27.161570Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:27.161540Z",
    daac_submission_timestamp: "2021-03-30T19:46:27.161124Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 34,
      FileCreationDateTime: "2022-01-08T07:34:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29-20210330T192019.56736Z/output/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:18.836418Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:33.974084Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 33,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:16.957Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "LrAfZXnocTmowRxlHvV5TQ9hyJA4JH549wwJGE9iodqkxRpup517FJa8PQHxA7N0p58O2nPgQcxUeoA8JAImBjxuU798VHIs",
          "x-amz-request-id": "W9BSXQ7QEYEJJMDV",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29.qac",
            sequencer: "00606379F17E43C228",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132018718",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132018716",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:16.957Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"W9BSXQ7QEYEJJMDV","x-amz-id-2":"LrAfZXnocTmowRxlHvV5TQ9hyJA4JH549wwJGE9iodqkxRpup517FJa8PQHxA7N0p58O2nPgQcxUeoA8JAImBjxuU798VHIs"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379F17E43C228"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "aaaa51ba007e22237ce5988ab378972d",
        messageAttributes: {},
        messageId: "1e63f8fc-8733-4a2d-988b-8fee0fba4474",
        receiptHandle:
          "AQEBybxqTzK3Emhy/t2h27QOeSyGMjcXgrZmBmI091umUvz7pjwUpd21aT1qa0dnvwiGwh7ebkH+W9dASmLz2NwG9416Gqk5/l87+4ECrP+5xl+ceAMy9pydl9D0winXFs+2mo7w8MZTizsxV0nL/Fy0eKNl88JtxlXnYnXqSgWb4Ld7DDkOnUMBTNy0KpbJn7e/Zx3g9b3nCAwcz0pv1c6r0qxwCBOF4ABBUL1+yGFRCoorpyPvavWQBt7ytMZIanqVs2CkOzrbWnSquQxJfgYA5ACSX/fPd2m8EUnuI19iW/TyIranyyfzJQvjk0aMCf0HITO3uh459lHPVNZH1QjFjo+NI5k5vOqORocQj9mM1Qmo4AwcDYCKWw1GkvKSH5NhB1wiWTU7flQ5teOiiYLVhqJ8c8Ze7OLClzirZaPhpz8=",
      },
      Station: "ASF",
      VCID: 29,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:62827236-128f-48c1-8e4c-0ff909666f5f",
    },
    starttime: "2022-01-08T07:34:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:32.961134Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:15.313",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:25.426553Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:25.426529Z",
    daac_submission_timestamp: "2021-03-30T19:46:25.426206Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 31,
      FileCreationDateTime: "2022-01-08T08:11:56.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29-20210330T192042.404836Z/output/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:42.174304Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:15.303903Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 30,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:39.551Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "nIiL8Tn93QFtmnEuy6AeHux1omla36jf+P9fy2WaWE++geHX/ZD93ktexWSuFJa44pVKSpBfVv2wnA6fKitfyJ5+TzRsZ2kN",
          "x-amz-request-id": "V579WFYFPBYYRT1E",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29.qac",
            sequencer: "0060637A0864ACE06D",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132042079",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132042078",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:39.551Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"V579WFYFPBYYRT1E","x-amz-id-2":"nIiL8Tn93QFtmnEuy6AeHux1omla36jf+P9fy2WaWE++geHX/ZD93ktexWSuFJa44pVKSpBfVv2wnA6fKitfyJ5+TzRsZ2kN"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A0864ACE06D"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "0ffe8598eae986a84ac0b8761c4f3438",
        messageAttributes: {},
        messageId: "e35446dc-bc91-48d2-84d0-045e65c5e11b",
        receiptHandle:
          "AQEBY52mOFaGXh/yBjZ8++c167E+/UqgB4NaynXuNkWffc8GpoCfy1WPehvU+Hx3ynbiSAVDu0xFXADC0sqr0f27+xITaEGyBQccmZBrOyeYi/QpTrWQYHtFdkTSf2zwvi1LnX4XsKbKCyYAqZDt9hCxB2UUppeshDHKToOZ//o9oDQIbPiAY8DGhHO5WxA05aJHzuG290x0Z+dFgvXqv9EmTiJ9xkbsiVemYanNkYmE0x+DeieRvTbPoI8KlEAEl4TI5icTjFnJmwilZ6x7m2vgkPuxj9bxaulcSkG/Hni2J4zj9Snkx6blRfoO/qsbojMUBEvSKANz1QDoojlBcrr7DGcC2H/cschSyPp0pGRCzUbByXbWSm9G7MnjpJefHMiST+4JK7wKxsw2IOp7kXcx5xQSkeyz5LZTyV+eoEkWYV4=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:0d230024-ba0e-4bdd-bf42-f6df7d3a4662",
    },
    starttime: "2022-01-08T08:11:56.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:09.779738Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:16.753",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:11.109227Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:11.109209Z",
    daac_submission_timestamp: "2021-03-30T19:46:11.109168Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 31,
      FileCreationDateTime: "2020-01-08T07:28:30.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29-20210330T192010.518564Z/output/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:10.292442Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:16.742800Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 30,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:09.128Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "9VAZwdd3grLdnUjF2MINhD3LzcIHlG9PwdlDKIkRytn/fBGbqHVqj6JqCz+p7s/QnjzTlbcNc5cvbZSXWRWz9obJCDlbGf26",
          "x-amz-request-id": "J1B4QMQS7Q8GZ340",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29.qac",
            sequencer: "00606379E95854C82C",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132010046",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132010045",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:08.306Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"HPZVRNPH7J4P7N33","x-amz-id-2":"00Dm5rKWwZQGFA/9dx3BiwQsP7ROGKPIxfr3AwE34Nt17+xJS2SidlaP1N34/fC1jy5unvE0dwDVQE0pqaj1JViZIf1mmmmR"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29","size":29905,"eTag":"5e5907ef81257247d435f06244b01e4c","sequencer":"00606379E8B4122C96"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "08e8870493b8964a0edb4079a0e0748c",
        messageAttributes: {},
        messageId: "93435cbc-a349-4822-9f07-8e5587a19430",
        receiptHandle:
          "AQEBF+H/SRDlcDwmvrvKJmRhcRS3AKlfeKwJh9ESvw4yp6K85dAE4lbxW5cLCbN/NnDG8Ou92EXrHmY3PYmlngv5pI15C3O0rH6VeblKT4A1hSGarjdgtez03GdK4IguP8O+lKE8iqHvGdPZCojc94Jk+X6tzSKuYQZ/+d1bI7fgJHvp7YsZScbNpSPYiilE3C12dI9fwqXkjz3ydpi0TyC0DRG1KUhLqP5wdMZFLcG2KIwn7nvM8u53ns2xae8zLxi3wPu3Gaf0XRf+uSqSB+tz39e9HmnO3LGMwyvqi6KbhePTWqLu5ZYIV2L3aNMA2wnhXJOeEE6Naz8wXnnKt/+kq75850OBOZLnO/BHGT0fmndfM6kO9TWFMb/fSj8psAxnxSEfEpvUdjcDboVFKxrBbaMMrhkDdJqgPNVIqkDLROQ=",
      },
      Station: "ASF",
      VCID: 29,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:3554db47-74a3-4bc4-ab49-6893ceaed6cc",
    },
    starttime: "2020-01-08T07:28:30.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:20.108005Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:08.194",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:15.394127Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:15.394110Z",
    daac_submission_timestamp: "2021-03-30T19:46:15.394070Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 74,
      FileCreationDateTime: "2022-01-08T08:25:36.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24-20210330T192036.43280Z/output/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:35.795623Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:08.182443Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 73,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:34.175Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "+sO2p+CfLrPb7Y8RW96vXl26OO1tf4wftSmfbQFdrDIdwIVGrb9NtEse91Il65ksQJ1d/Gr04pokKZIJfhQQ/eVdPMQfNlDd",
          "x-amz-request-id": "Z7NN09Y5FKRBA3M2",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24.qac",
            sequencer: "0060637A02EFB7D4C0",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132035675",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132035674",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:34.175Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"Z7NN09Y5FKRBA3M2","x-amz-id-2":"+sO2p+CfLrPb7Y8RW96vXl26OO1tf4wftSmfbQFdrDIdwIVGrb9NtEse91Il65ksQJ1d/Gr04pokKZIJfhQQ/eVdPMQfNlDd"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A02EFB7D4C0"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "94ec0736ab18b7471e2a9039460cd708",
        messageAttributes: {},
        messageId: "dd619723-2e9a-4292-a451-6f6d49c057e2",
        receiptHandle:
          "AQEB9i5YPPkWdhdl2ffsv6WoWzIYWJ0LLWkJDtpdFrwF5WZSEGkgC9NLziPKPNZTmi33ofAmxYTz4Q8HY8MUjV/yhR1ljYntBbsU+mFwMxcvjvhq3IE0prOlXTa7Fd7A2bCcVMz1+rXjCYFLabKpT+AxBQwCJBsoPFzCD5nXsqM7SdXYfLd11koK/nVYsxUHlntjFElrwv6x7f18xYaii85XpiZOk7RjK2/bhe1t+prDqGg4AYtePDzW665o5Y/aSX1x1hLHhpJRpTlp30EYp4bsqof9VQ4MvfMrXMSU7OeuZXiRz2cVNrZxqSUWF9zZO3FnljlHtz7/nUKqns3K0T4VBfKkupNRsors2ZYXqBJTVPnivpFXoI0TX3Ink3uit6ucyXEjLVr1rAakuYJzEZzjCC8VqFx0JfUi3YhjGYhWUMs=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:2909926a-7cce-4c9a-bcd0-f2776807aff7",
    },
    starttime: "2022-01-08T08:25:36.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:33.760690Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:31.526",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:25.769107Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:25.769089Z",
    daac_submission_timestamp: "2021-03-30T19:46:25.768833Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "WG5",
      Channel: 15,
      FileCreationDateTime: "2022-01-08T08:25:36.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29-20210330T192046.747951Z/output/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:46.434442Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:31.515834Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 15,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:44.570Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "SUXw1za9GK/m4ULdJ/YD7YLdo8EHgMDVLo/dN25eNm7arocdJJrACV0et9QtOzipzTehczycx2dsrrkODOsj1+99wAHQ/AJ/",
          "x-amz-request-id": "D7YTWFNYV0JKHSE5",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29.qac",
            sequencer: "0060637A0D7C8F7331",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132046342",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132046341",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:44.570Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"D7YTWFNYV0JKHSE5","x-amz-id-2":"SUXw1za9GK/m4ULdJ/YD7YLdo8EHgMDVLo/dN25eNm7arocdJJrACV0et9QtOzipzTehczycx2dsrrkODOsj1+99wAHQ/AJ/"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A0D7C8F7331"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "52213be19dbe313b77598cf2cc80b4ad",
        messageAttributes: {},
        messageId: "eeba22e0-16a1-4449-9d70-376b403f8570",
        receiptHandle:
          "AQEBbWmgCnzlR4KkiqB03UIA/OaWf7w6erWwUaJwEqDTrKXuhfkD8NJCqWCjdksu1xaIDTVPdX15LRLgbdObJ7ayhI9adhutnighW09ST9fe0JVDdN0M86GXrJL81RAn8/jxxOV/fWZhRxpLnA6TGjN8U0pkj0KpPPUpIuUwXr0S20HUfaC4KMlUqF9odZcAYI+3o5HFurpPtIpOnidPFz53EQyVG5cpRwetAJtojCFIiIMFsQX2mInI/oMsn4AQY9r+bFupgs+giep2jw0LKzEjO5noP5mcvPMYnd6wie8WbIEg9AQXv8/QvB0szDskl0idKvWpwLGn6ZDtGdr99itgo5HfdW9fYFs7hi/zJ+2aoPS84jXgWg05SMxukXvHN6jRcFoutVWyEKLB6s5JAWtwqimjyA0tCUBbIxqceIzDk8Y=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:0bd456c4-e0eb-4050-9eeb-bf691ecb8509",
    },
    starttime: "2022-01-08T08:25:36.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:28.150269Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:09.329",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:21.985361Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:21.985338Z",
    daac_submission_timestamp: "2021-03-30T19:46:21.985059Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "PA12",
      Channel: 82,
      FileCreationDateTime: "2022-01-08T07:34:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29-20210330T192037.837815Z/output/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:37.579734Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:09.320847Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 81,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:35.835Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "l0zvhisTiec9i7lYP9luuSvC7lW9copgCtllON/4MKorO105opOUO9kTWP3kVCsOZkuvTD0BmTrs61sI/KnTGQAeR+8N919H",
          "x-amz-request-id": "CN9BR89CYF6G1AQC",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29.qac",
            sequencer: "0060637A045F78FC94",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132037507",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132037506",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:35.835Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"CN9BR89CYF6G1AQC","x-amz-id-2":"l0zvhisTiec9i7lYP9luuSvC7lW9copgCtllON/4MKorO105opOUO9kTWP3kVCsOZkuvTD0BmTrs61sI/KnTGQAeR+8N919H"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A045F78FC94"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "02276f60c01a34bd77312facfa7c6253",
        messageAttributes: {},
        messageId: "93b1368c-e193-4937-bb67-875512a4bed1",
        receiptHandle:
          "AQEBA1OOWPW0pKclqlOX7jnavJ8c33uhvggGUuOYtO85yn0hXhm2sz4tRqSKW21YI5EcGtl7uOt/e38vew5C7faQQZ95w2o0VqrTOFWFlxsU7SIVo9DOzAjw/KNGsDuBTq3CKlwcA4FK6j4Gg97PKf816jYZPcWMvwKp2Soc+Psx+k1qYFEBuEfoWSbOkqn/jkTyDkKZ+WOPwGOj6VbLAhazk6pHjJzi8VR9z+lcm2JjBEIisqLVSkXkqrB00KDzbaORGSsR4HtF3KxmOkJIrrgt/EVMfZzZPszGI+iNSzO/gZSWZYkvuj0deeLAh30/gc0PhfrRC9dn1dy8O1DtYLrq1kb7IfQ5CxDBDUn+xi8EEADhbBtPxFAkBjdTHhmvm2ItDKCcVvetHUlOivM7ZKdQRf5U380OswAikrcz9BP8Zoo=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:4524fe0a-fc85-42bb-b957-84c39dd5d212",
    },
    starttime: "2022-01-08T07:34:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:33.588536Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:48.805",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:26.102321Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:26.102291Z",
    daac_submission_timestamp: "2021-03-30T19:46:26.101994Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 84,
      FileCreationDateTime: "2022-01-08T08:25:36.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29-20210330T192055.62991Z/output/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
      FileName:
        "NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:54.779669Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:48.794382Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 83,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:52.795Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "k/fzg9IvHB5EK5rYEUt7w+6dc3ak+TqQvBBx39hGwUHBTqo8B8/kadTgm6sNCnJ+dpAGR69m3H+95KSXZtwRpNRwamG8dree",
          "x-amz-request-id": "F35WEAFXK0085B4W",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29.qac",
            sequencer: "0060637A15DA4EEF38",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132054703",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132054692",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:52.795Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"F35WEAFXK0085B4W","x-amz-id-2":"k/fzg9IvHB5EK5rYEUt7w+6dc3ak+TqQvBBx39hGwUHBTqo8B8/kadTgm6sNCnJ+dpAGR69m3H+95KSXZtwRpNRwamG8dree"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A15DA4EEF38"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c5c9a132265769b2a5eedb111e9883e0",
        messageAttributes: {},
        messageId: "3f56a6fe-5d83-4a2a-9a44-377531a050df",
        receiptHandle:
          "AQEBZDACm5K1H1yWFdFDNQdBd0neCnsAI4lnMJN1RONTnZ1AQrVeZkTv47XXdWzHDlj7gUw0d+3S/PcVUgGDVQVoXBiP6441XyXzfC8AM7NOm0n9DWuortMT3T3+7CP9WGW6je5TXBKmq76zxX8eSdPIaCGhQZ5ioAis0yskV81pL6vY2KeZBUqzpF/9TTNBBSofx/kK8BfWXqoTHgXmnx++f8iPP19rAnhDh4GKwoHhlJRDwhiWmmlIv2ze/3kQ+3tUURknVwBTM0nQ2EIWmy+x/DOHudbwoYrAnLDjoIqSkNYjBZb+aTgNX490KKILTVfqW/D4vsz3XH2NiNG0Idfa9t+M8wgUKjDl5x9ffL3s0lXrqjXDkt9XAmv5T2rql+cqFdHjkLrYmg7RnkSuRPpYnH14v6w8c5qT+hOqpdbLmUg=",
      },
      Station: "SGS",
      VCID: 29,
      id:
        "NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:10b3ec46-c3dd-4342-a8c3-ab5d5f6d2a61",
    },
    starttime: "2022-01-08T08:25:36.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:36.464481Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:46.148",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:28.562158Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:28.562138Z",
    daac_submission_timestamp: "2021-03-30T19:46:28.561842Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 28,
      FileCreationDateTime: "2022-01-08T09:00:20.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29-20210330T192052.626682Z/output/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
      FileName:
        "NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:52.390292Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:46.137854Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 27,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:50.331Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "9hsqMpGj07rKoLDZkdXm4erLtg69LF9isTPI0TFtWZjcOtzETYu79p10Nt2qD9TtPuAVoPoout4zfCf24/fRulab3sNozu4h",
          "x-amz-request-id": "9B0917YC409MF34T",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29.qac",
            sequencer: "0060637A135492AB61",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132052298",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132052297",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:50.331Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"9B0917YC409MF34T","x-amz-id-2":"9hsqMpGj07rKoLDZkdXm4erLtg69LF9isTPI0TFtWZjcOtzETYu79p10Nt2qD9TtPuAVoPoout4zfCf24/fRulab3sNozu4h"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A135492AB61"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "6588ce4584634e0eba1c509b8f4db5d3",
        messageAttributes: {},
        messageId: "a537ef0f-39a9-4cc9-90e7-9fd69fee0441",
        receiptHandle:
          "AQEBHB7e+Ne7ZeeTemI5JO/9d2W/MmM9onVplSUCkFLztvKpl43bZ9gcQbYQcLooBCg3uQL2dnAbtAtgqwQePMxtZbbTRNepSUnNJA2SKgJAjhXKi2vRzj40iWIP8vzg4B3Q7/uu2HO5tjP40/KXJN0eg0+B7CvO7L8sE+dRhCVpEqjmqRQXdITN7n8DCKZxwHDi23rjZRYDz15s+AxcYRXA86I8BG/fJLy+TgaX4qiSZfQa1oVEy550givJjdSiNVfHkcdOHvb24FyA29KsVmPWh3S/5G/YcwTDmQNsqPaAfl5WHPDC82OcMSoB+f4fYJHu2M0Pbad2hhQQBhKFFfGqslzDNbT7GSeMuoaZtVo0YcDbtYHoOnlV4ZKqq1HuuvHbbT0+Jp9W5/sQ4AL6tfYraB/7SFIIdKB/iEdr+L2EaGE=",
      },
      Station: "SGS",
      VCID: 29,
      id:
        "NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:d238f7c5-734b-44a4-9780-53a0940a3c1d",
    },
    starttime: "2022-01-08T09:00:20.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:33.265428Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:21.775",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:19.176558Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:19.176542Z",
    daac_submission_timestamp: "2021-03-30T19:46:19.176502Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 5,
      FileCreationDateTime: "2022-01-08T07:10:28.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24-20210330T192014.203145Z/output/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:13.978457Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:21.763484Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 4,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:12.188Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "fz94fXrtUzgUZ3+OaCcKJ8bKTggHJZJ1XZCCPqnIb1qGAUBE6AyStVl3MnGAAl0GSdf+82pF+YXuQdlpUyYXluLxUHgjgWAQ",
          "x-amz-request-id": "X3MEBWBQVZ60CXB1",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24.qac",
            sequencer: "00606379ECAD10D742",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132013872",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132013871",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:12.188Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"X3MEBWBQVZ60CXB1","x-amz-id-2":"fz94fXrtUzgUZ3+OaCcKJ8bKTggHJZJ1XZCCPqnIb1qGAUBE6AyStVl3MnGAAl0GSdf+82pF+YXuQdlpUyYXluLxUHgjgWAQ"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379ECAD10D742"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "fa2a892fe67ed3e4a0d80d73a498a0a5",
        messageAttributes: {},
        messageId: "7d18945c-5ed1-4960-84ff-4db96c01c7f9",
        receiptHandle:
          "AQEBzXXQzzqErHCUItByEGjKHmNUAcS9JHKk7aKQuoDjMvb03TvNiYAPziYRke58y3bK31J9tZa9DfzR+wKiDTOsp1RB6A63z+8aLE765qh8J6uyx5xELClnZXhJpH5jChIU/uxNNF2/c0Bovp9HAt/AJJB0KCvv0oKa5zIk819Dzq+vhB9dq2xuTy68Q8YkpX62/lExF4M6CC9MVQseLmSv3FGt9uid8qgvlAIC1LdKbyrfTHXLF4JZ79yjuh2URSy+fCq0qW008ZK/QzWO2IDrnEjodAe+I1oAfW+3alkd1mkT/xmGnySvqZCQDrykhSaunI5A7t9kJN2MIUD6288g+E0nJzA7F99uX4BmtMoIxKI0NQLgIssFGTGNdQQGTg6ykMTgqN4NMXlK86pgHOgRuJ0qarEv+T52k4hDD7TgzSI=",
      },
      Station: "ASF",
      VCID: 24,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:4c712d22-67b1-4167-b279-ffdef580f7fe",
    },
    starttime: "2022-01-08T07:10:28.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:26.789512Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:53.597",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:19.856242Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:19.856223Z",
    daac_submission_timestamp: "2021-03-30T19:46:19.855955Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 15,
      FileCreationDateTime: "2022-01-08T08:19:52.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24-20210330T192029.320490Z/output/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:29.097391Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:53.586710Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 14,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:26.483Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "uXVCuRr7n841yymVsEaibr3djjektWpUomc33ML44+pakwayBEb479ZFEdGxkd3yuD+vTp39RFP26uvWIyUkRpIZzGanVRhT",
          "x-amz-request-id": "Q5R6BTKPP94H827C",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24.qac",
            sequencer: "00606379FAB4151985",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132028631",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132028630",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:26.483Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"Q5R6BTKPP94H827C","x-amz-id-2":"uXVCuRr7n841yymVsEaibr3djjektWpUomc33ML44+pakwayBEb479ZFEdGxkd3yuD+vTp39RFP26uvWIyUkRpIZzGanVRhT"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379FAB4151985"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "789b61532ee8ee163b5b1fd8c71f7973",
        messageAttributes: {},
        messageId: "f511a095-722c-42b2-8370-8547533565b9",
        receiptHandle:
          "AQEBjEIZkR/A1/pySfyjLqsmO/oKVee+2wP/OR853YPeBOlnxIgXjfoRn5fdpD1kIM0xKDFzK2W3NkMX7EcJ8loMQ3Ndi3alWf9vI032/z30bTlpU2l19xaB4VwWFyTYjz0sE5QMNqTMjCzWAD3qpgGHgILkFKQ8oTeF1Tbx8zPIKOLyZENEOuI2wa0aL+tOJ/JPQE1bD9xgnTcuS8IqMIgphL7xSkKdLxsvj8YYjfIE1Z3h9t4md0q8oOPXvW/LWzE/YILRAnZeHVniW/hUTLTyDWDnZRgj6wr0qQPI4ECLYdGIybvHfIMx86qaOJVK5Nk7kwrWhC+JSmkWIpPqbZH2ZvEQ3uHK2LHtJdFUpkc/mUQA5merSZG/2IHtJBYAtlTkxSLTJ8VMDAa8w4Mmf8+Rm+ZAm3Yn11TqridORtgc/PE=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:1132e7aa-8861-402e-a3f2-7c962f902828",
    },
    starttime: "2022-01-08T08:19:52.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:21.840138Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:57.756",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:16.785893Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:16.785874Z",
    daac_submission_timestamp: "2021-03-30T19:46:16.785626Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 61,
      FileCreationDateTime: "2022-01-08T07:50:34.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29-20210330T192034.195843Z/output/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:33.951545Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:57.746860Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 60,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:31.576Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "CCfwK2k6+PxaCMzIyyrU63pP+qIOPNUpv6YXBiuLLGTUC9GgooxyvpnmITYm7AXgIFy4B/ZufobaSQOMMCEtGYGowaj2fb1t",
          "x-amz-request-id": "BFBTV56707MYZDN6",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29.qac",
            sequencer: "0060637A003A35398D",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132033861",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132033860",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:31.576Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"BFBTV56707MYZDN6","x-amz-id-2":"CCfwK2k6+PxaCMzIyyrU63pP+qIOPNUpv6YXBiuLLGTUC9GgooxyvpnmITYm7AXgIFy4B/ZufobaSQOMMCEtGYGowaj2fb1t"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A003A35398D"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "7caa8b7d27ec9598fd15f087e451b354",
        messageAttributes: {},
        messageId: "4da326d1-8293-4f7d-aa9c-a07687375a78",
        receiptHandle:
          "AQEBJ4SLjUKnt8nxmB+Dx1pzqvwQ9pAhmjWLjS7eeMTWoIyyPNF9ihKr8JMKT0+pBwZjPaNmfTY+LX72w8gM71HYb1Q+BMYuQq69eUfGsRwxEhgJuV0MOJRvB+js4HbjP53lx1H8Z8KFh8RdQw1x+Gk41eQl86om/zq6Ny8tbSTBlL2UIwA20QG3+ct+SDeMhgPIAWr2oS4qR4PYgfx0X4PVKf/TQQwwVnhtQL3hajcUbOSNQ+gmyiIVpyoHAe02zK2SblCgHM23cQ2lJz62ADG06gdvSspWe9VKXQYgF2UgAWslw0P4SO9WdXuqTCpca93yBd+L9v4RYDiDqvLGN6dptACakdm+DSGVJzMmapKxMFYitoFykM7k1CgVnGBbhVao69Ej0RZrOByewEhSN+3k95R1hj1k3G5TmuNIy5T+BoY=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:adcceef8-c38a-44fc-9654-0240b199e52c",
    },
    starttime: "2022-01-08T07:50:34.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:31.254731Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:40.179",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:24.033071Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:24.033052Z",
    daac_submission_timestamp: "2021-03-30T19:46:24.032775Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "WG5",
      Channel: 45,
      FileCreationDateTime: "2022-01-08T07:28:50.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24-20210330T192025.626938Z/output/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
      FileName:
        "NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:25.378461Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:40.166446Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 44,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:23.254Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "gmQk/Aa/LC85DKpbRG1o1Af8pVD/oC8lLAu5Jab+ruJW/po/v5SCdHT7MnzwQ7FFjqdXjK3LF3zdzuc218jeHKBftsb32jOh",
          "x-amz-request-id": "WVR3XJ0SMBA3NTPA",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24.qac",
            sequencer: "00606379F7D4F982FF",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132025279",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132025278",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:23.254Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"WVR3XJ0SMBA3NTPA","x-amz-id-2":"gmQk/Aa/LC85DKpbRG1o1Af8pVD/oC8lLAu5Jab+ruJW/po/v5SCdHT7MnzwQ7FFjqdXjK3LF3zdzuc218jeHKBftsb32jOh"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379F7D4F982FF"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "0c7a87a36db944aaa6cbc57edb260d84",
        messageAttributes: {},
        messageId: "b01a0bd8-aa5d-4c21-83e7-d113ec237b6e",
        receiptHandle:
          "AQEB2bqzR0fSmg8+n/9Wr74nXDGPrwOZsTbBFnbr1D/M/5Ck/DTkRNEeFgO9jz/jsRxFyEtbL17Z1WnhuFB6gORvUhrSIRdI98CaC4RxCFOqo0wPjYRB/o/YlVXzK5OVnVVy5Gl9Qs+U3nXssDFYVGEpVWumxYL548Opw8DQG54gJhuRCnTXmmPizZxmV/rttH/g7O1ZrXsfcvRjVvGDUQfDsUMStbOkrkrvy9PAwXPXYObpQoiFnQe5Kd2x2Xintkf7a3IrfF/3J6XKDJVQp9D+AvIoe3sX9N05RyHT0s1hrlMstjiKwA01t+aAnAR75qBU4dHUPIRx5UdPeiAfmcAgzYI5gS9J7C1AY8TI+N4/uKihJCG0yVY/Wtzo1oMcQYi4HMTZoS13WJLdfKwM9CTgcj4nPZknhVIG9WGxngbYKBc=",
      },
      Station: "ASF",
      VCID: 24,
      id:
        "NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:4af80b89-d68c-4b4a-83ca-f48f31927ca5",
    },
    starttime: "2022-01-08T07:28:50.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:35.740494Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:21.494",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:26.802290Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:26.802267Z",
    daac_submission_timestamp: "2021-03-30T19:46:26.802210Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 8,
      FileCreationDateTime: "2022-01-08T07:29:40.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29-20210330T192015.622868Z/output/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:15.397645Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:21.485885Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 7,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:13.413Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "bypNb+NVXdZAelOjmg2NHxIKDD/kSchzR530GRAB9Cu5RgmfX1d91qwSSwHbXWs0VZ0dr2sNY2kb2Tcd7HloH2cF2f4DpOZ7",
          "x-amz-request-id": "MJMZY2RQ1ECA0WRV",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29.qac",
            sequencer: "00606379EDE85C37CC",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132015285",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132015284",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:13.413Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"MJMZY2RQ1ECA0WRV","x-amz-id-2":"bypNb+NVXdZAelOjmg2NHxIKDD/kSchzR530GRAB9Cu5RgmfX1d91qwSSwHbXWs0VZ0dr2sNY2kb2Tcd7HloH2cF2f4DpOZ7"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379EDE85C37CC"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "29a8b89c2d8c93a18096dcc4de2fb1ca",
        messageAttributes: {},
        messageId: "cab0e5de-9d17-4fb6-9643-e4e16b15f58c",
        receiptHandle:
          "AQEBzbSo4J9nKIGTaSwvz/4bRFUehfJP7r8/KRImFt3TGk1yPlG1VRVmxz9uq1mNszpB2VjC8YNE5VbkhDBKCns/Vf+Y3w4UU8CmlPCfBbs02L5vOKOqKiIp4eVLhq9tZIesz4v5mbcb7fRI5z69UsonsKxROccwbBTHltJ7ejDZNwSs+ZAFZIG9ajttL2h68JhllhhE+pc8iaqI4+WdO5C24tqKk33mVYi81UGJ3atEFnVyOys71ulQLf9foZ79Zo6TipBxVnXGgdqmNnedhrYx+zSPjBP5H1uDL0sY20JfQ9j1NRyxKIUOIAeTbpJccpa8MT+lDqz8BZUyNcpT8YPYaa34JIUIogP87/AKVXluFN4QTGf71d7aDs9XJ7e+M3/9gg+JJvh9VtmHiupHd/jEOyXX2TfctqEB75QBJpevm9g=",
      },
      Station: "ASF",
      VCID: 29,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:b7596e1b-2ca3-480b-8847-ea0da4be5322",
    },
    starttime: "2022-01-08T07:29:40.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:37.752167Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:33.121",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:28.217928Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:28.217909Z",
    daac_submission_timestamp: "2021-03-30T19:46:28.217570Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "WG5",
      Channel: 32,
      FileCreationDateTime: "2022-01-08T08:13:16.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24-20210330T192048.475234Z/output/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:48.253856Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:33.110540Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 31,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:45.757Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "P1+cFMrAhbnf1RwNVoesk5BJDq5ApVXnT3wUYXBgPzX0xUB2kvokHK9sTI3lUm3BHaO04ITDxYIAuEltoAQYf6XJvQ+1yDqm",
          "x-amz-request-id": "5KT3JB60QTECGTV2",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24.qac",
            sequencer: "0060637A0EB47847CB",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132048143",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132048142",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:45.757Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"5KT3JB60QTECGTV2","x-amz-id-2":"P1+cFMrAhbnf1RwNVoesk5BJDq5ApVXnT3wUYXBgPzX0xUB2kvokHK9sTI3lUm3BHaO04ITDxYIAuEltoAQYf6XJvQ+1yDqm"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A0EB47847CB"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "9cc72634d1bfb5bd9258220408a82186",
        messageAttributes: {},
        messageId: "467bacc6-0930-4ea9-9d32-e670ab59d4ad",
        receiptHandle:
          "AQEBvBgjnY6zn8HGMFK+czyDvwI48UM5oJkfXiYWO/2xTclwHBAEJn7nMHzuXvvzV3M5WDaesVOoFHmF2mqNGwCzn02jBNFmVHEXhAGlu9lfGf7rLjCMtSyOPpgKX9HENm9b6497+dWYy7SX6riGVXZBQzDjTA2X1EnOQecZMgw39S4+FFfFuZDGLKG8RMOisW5MoDkSlRcVY2n731kicYlg0SFIgyGehX2NSsq7S2KrgUnifSyG09u3FvHdFzxumhkvitHlbcRmYVsoke1QjO7a52RG6EEuVYad5BTfvI6ZZLLjVy1RpZn0ebBWrcLrtPIfsvV/4Qe50JP5Cthp3/QPnyX4WR3QcsKM4yrkXMk7QT3jQW8Su8oU3umvjvTii0gwYG+O0CjXJ21cuWyRmTtql4iqL8dXEyAHPqiwMTaGogY=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:140d35a4-7a53-467d-8bb3-4d18df11d8b6",
    },
    starttime: "2022-01-08T08:13:16.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:26.211912Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:16.475",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:20.198794Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:20.198774Z",
    daac_submission_timestamp: "2021-03-30T19:46:20.198498Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 98,
      FileCreationDateTime: "2022-01-08T08:10:28.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29-20210330T192043.184633Z/output/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:42.935261Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:16.463239Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 97,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:40.758Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "szQgW0S1Ux1xn/AF45l61ImMJ02NPZ7N4jLtKJSJwiMjdK7YHfxFHdo14eW0CiBztzs4gZVo228nBVYr1adsi5icIKAmHzWk",
          "x-amz-request-id": "6EVFAX5T2A6EVRY1",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29.qac",
            sequencer: "0060637A099FBE80F2",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132042854",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132042853",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:40.758Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"6EVFAX5T2A6EVRY1","x-amz-id-2":"szQgW0S1Ux1xn/AF45l61ImMJ02NPZ7N4jLtKJSJwiMjdK7YHfxFHdo14eW0CiBztzs4gZVo228nBVYr1adsi5icIKAmHzWk"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A099FBE80F2"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c2b2c4caae637f3eff671cd52d3de313",
        messageAttributes: {},
        messageId: "70d58b9f-eab7-4768-8209-a2a7f8ad8b5e",
        receiptHandle:
          "AQEBCR1Z9gFypU3Xjgf5n12N0c/+0KV+HbJSoB1Gl+T/IuR7jr6X22wiidgeKd7aP9QzpubgzhBGFa/s8sdbZg0smJ71d+wvF1YjVm6uPyckHGjWFRLKO5DkCPiyw8lKZd7MpQAL1c5/gH4TouTj7xEse0Jwa1OnpouiNtpQeHzdxvfhcnd8EC8U1KygtEjybCK0MhYmP2eb6nWSFX5N/otgs1jqUVmNbar9NX+uB+lsgwa9A5fDhJ/2ctwOep6/yetUMqQyiilITCho4sqvsx+f+mhXaHhn4YYreJDVQk6aiKDn6oODq6ZYXXB0p3dbVe5gJgGTNk2K+BFOKBa0Ar3PXBQa2JEgJEuyGLMnTeUP3cJi78pG3MdnhsVms15qORtJJ36i5/mV/p655R0RV+KL3avlVdf38cTXtScbQ9Qj5G0=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:65766ad4-8421-4344-b422-c69404127898",
    },
    starttime: "2022-01-08T08:10:28.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:27.654352Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
    ],
    creation_timestamp: "2021-03-30T19:22:20.925",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
    daac_process_complete_timestamp: "2021-03-30T19:46:20.954659Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
    ],
    daac_received_timestamp: "2021-03-30T19:46:20.954629Z",
    daac_submission_timestamp: "2021-03-30T19:46:20.954202Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 43,
      FileCreationDateTime: "2022-01-08T17:11:56.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/22/ingest-staged-NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35-20210330T192107.456297Z/output/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
      FileName:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:07.230544Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:20.914659Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 42,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:21:05.069Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "Qv9v7AaFspRNuzf0POxtuYye8FehNW5mEW92UGubh2gELb/twueFQ1rvvpESXH3GxC4D6ObWEQfX/YDzDqrnsMTf2HmSgHNy",
          "x-amz-request-id": "B3S1KYPCDAGEP33K",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35.qac",
            sequencer: "0060637A223DDFC363",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132067128",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132067126",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:21:05.069Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"B3S1KYPCDAGEP33K","x-amz-id-2":"Qv9v7AaFspRNuzf0POxtuYye8FehNW5mEW92UGubh2gELb/twueFQ1rvvpESXH3GxC4D6ObWEQfX/YDzDqrnsMTf2HmSgHNy"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A223DDFC363"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "ff0a8fa208f8ea9b88f04e7beac02bd2",
        messageAttributes: {},
        messageId: "fc6a3b16-2ea8-49b8-b30a-01b3fa598ea8",
        receiptHandle:
          "AQEBeZBS2UiWEZMe/+YaDCDOdibo7kcBFai4Y19VXnaFZgEOS6vpyD0xUKo14ohda41dfUALL54dqHmtZFRVdkNzq7wc8lnaTgv4m3eTkiOZsWRlw4wEEB2yNmXSt6dvX2Ur9faTnlkA/7G4rCTxCGDXvxJK/0uFj5Zp7fFzC01nZZypYPLfUMlJ6kXjrfOhR9ZunlMzlZNZU9WMBSg6yvb+di1ldQqrXr1FlEkWgyWkAiL6RbMuWO9w6UOtYhR92AmQr4hyaIlatLzpeP+0JdAA/BqKl6V3Qc9Bfx41KKke4Is5ZC8Uf3r8Ii8er3+UG/AphdRyIXMqWYdIzMRsqFdnz+pbvSNoR+iwDJh0xhfJMm3wsKyhphf4XtnkXz2dDmBu8Pf4gzPZ/FhsjL6xkUixwKOpzjRHJN0bAJeVznHxtj4=",
      },
      Station: "PA",
      VCID: 35,
      id:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35.qac",
      ],
      wasGeneratedBy: "task_id:000bacdb-8adb-4f78-9673-412e859d45a0",
    },
    starttime: "2022-01-08T17:11:56.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:28.212427Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:24.566",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:20.534913Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:20.534896Z",
    daac_submission_timestamp: "2021-03-30T19:46:20.534855Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "WG5",
      Channel: 2,
      FileCreationDateTime: "2022-01-08T07:49:50.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24-20210330T192044.212070Z/output/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:43.933741Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:24.555870Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 1,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:42.001Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "IN//WFV+h9MiYjlgoKnlCrYBIb0fKD/XrhiFqAGYHlU7d2c5qtPg+93QmE9b3QRH1X+3wYboIkIBesaeeE/p9QPQmfYNURoz",
          "x-amz-request-id": "3Y9MBXPPZ3KKKSDN",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24.qac",
            sequencer: "0060637A0AE3122971",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132043815",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132043814",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:42.001Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"3Y9MBXPPZ3KKKSDN","x-amz-id-2":"IN//WFV+h9MiYjlgoKnlCrYBIb0fKD/XrhiFqAGYHlU7d2c5qtPg+93QmE9b3QRH1X+3wYboIkIBesaeeE/p9QPQmfYNURoz"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A0AE3122971"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "75678a51b2c18fe488350d27430f82e1",
        messageAttributes: {},
        messageId: "d4dcfb70-ab5e-4adf-ad62-e7d682426b24",
        receiptHandle:
          "AQEBLEFEhkpQRO8ouysJCJ8DWh8iSo7E6r6Ti3KaoZ/+QnAzsuLBu8mJ8Cp2pncoEf2HqC4iZ2SZpEzT872DqbNX2Dqvh4f4TDNkhCm0qw9wZH4pp/b2GmC91rOdzaIjEzJwya016s00a7wN0VtxZWt4JJ54yKkB0HXvfDUQ1MooJyfxuEf6SScw2Epl0Kzg//5mxHgBOPSWfRJWOjb/2rH7spDIkll2rYjWn2CHKVg3zln4Eq4NVkppuS65PWpCfslsgSIaPYAuWZWnk/DYPogvtZOocZTp1MP/lMCCdTYlNCG+LsJ+Wq/DQ7I5hGqia6Ge1kuFSN/l3+GgFTN77LC5Wou5V9lJyMi8VRMFK3xW5l5kgSywLcWFmqqhTIxghaaY47+342un+qc8Upqwvsd/BKir6ceIJ1ed7eiwpyxLf74=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:07d719ff-1b01-4381-886a-ee1ab711c4fb",
    },
    starttime: "2022-01-08T07:49:50.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:31.631821Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:57.959",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:24.375282Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:24.375262Z",
    daac_submission_timestamp: "2021-03-30T19:46:24.375221Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 50,
      FileCreationDateTime: "2022-01-08T08:18:48.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29-20210330T192032.674159Z/output/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:32.448938Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:57.947339Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 49,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:30.254Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "8gFv1oPrZUtUzak32mvAqA83RbEJQCrcGuk5fhXRTzcOfrClRZm8n6SjU7yEdjpj6K7byOlvt/VUjXGAQ44jT901j15ed/Tj",
          "x-amz-request-id": "J73395MC7FA4N76D",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29.qac",
            sequencer: "00606379FF0031258C",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132032307",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132032255",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:30.254Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"J73395MC7FA4N76D","x-amz-id-2":"8gFv1oPrZUtUzak32mvAqA83RbEJQCrcGuk5fhXRTzcOfrClRZm8n6SjU7yEdjpj6K7byOlvt/VUjXGAQ44jT901j15ed/Tj"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379FF0031258C"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "07095f5e3db0ad3c547385fc4bb78fc1",
        messageAttributes: {},
        messageId: "b0dea426-3274-42a1-af2d-3de0cb4e791f",
        receiptHandle:
          "AQEBS93fNd4hvHnGoivF3Xfti9iHMd+4biYBqy+XslCGt77L9anEe8sN4+YyLwfISx0gYEQ+px4z3tdfFGJq30QyRcxrhiBPhOHbxSpH9FBPucwrJZ4f2hm9myi+mnpvRfqlCaXrGsLz4D82qRuxOCJwUunOaSKrNyAKYBLJ2AP0ty+DEPSm2DSTdgNtu2I1YBYc8lQ1vzU2uTSPw7GVEgvtfTEotXWK2SJ1FhHED0Q7Vob1rhRxB7gYiVF1MzECHApdh9KJQK0ipbrBwpfWv37hX7j0kekrIeiRLcGlXCRNw6DvEOYBVQ3gbU+4YHlC2R8yc08VoT62EVgE+rBSxO5xhnXVWntXMt/fxOUI0rMmaVqSIngji04RZjvNP/4nprEo+VTRx/N5/cA5Y4cxc0Dol9AejCE7zym2C6UULR/KSFU=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:b55a531d-224d-4562-be2b-55c345343995",
    },
    starttime: "2022-01-08T08:18:48.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:20.064123Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:34.063",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:16.429509Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:16.429475Z",
    daac_submission_timestamp: "2021-03-30T19:46:16.429015Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 32,
      FileCreationDateTime: "2022-01-08T07:10:28.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29-20210330T192017.926773Z/output/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:17.619114Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:34.052179Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 31,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:15.793Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "jtxoa8kYStGULqYzANR23US9ukvic4nxK1244D9KxYd255nwpTb35VDE9kp4yuy6pEVS9rFMlv2kDCuDrGys6a77HSe+mGS/",
          "x-amz-request-id": "RQ6478HQW9MKPBWC",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29.qac",
            sequencer: "00606379F05935C020",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132017539",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132017538",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:15.793Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"RQ6478HQW9MKPBWC","x-amz-id-2":"jtxoa8kYStGULqYzANR23US9ukvic4nxK1244D9KxYd255nwpTb35VDE9kp4yuy6pEVS9rFMlv2kDCuDrGys6a77HSe+mGS/"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379F05935C020"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "fb2443e14e29dbca3dbc94fd4ec0641c",
        messageAttributes: {},
        messageId: "c33076d7-e2dd-4c2a-aaf9-579db0316ae9",
        receiptHandle:
          "AQEB70Vz6VUhfPGOlWsjm5vcdUKyj4xD1bBAgHyy3q+6LXzuq1O20ZS4yKpIEgND7KmF1SXHqhLDcX/CeznnbD6Kgb/o2taLoPk94wKBjYp8teZjBeLGg8HrXABSTYJ8JEtfn9DC+uZZD4ve013LTUridkeCIlbE0k0XXRo2BAlpE/4RSaq/6oW2TVKCCv2GltoeACpKCyPmjkoQvutmwcQhLZS9qsO8mpxMtAdv29UeQac6WedHOqvN4oJnIp/63iq5uqVj24RwMDOz3ambaV6bZN5xXyo7I0vnibSa2OnllTYhhmHaHSR+z7igD4lUiyfM6N4gjmJoQ7SptcDzNZ444wPlRbb9jf8k8hskPgKLPD5DXbRvTg231o8Oa0/U9Tj5L2gaB8z3ImLSm72vYfda4YVbNF3WhwROR/EfKK/3ikA=",
      },
      Station: "ASF",
      VCID: 29,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:e79302c6-7ff4-41ee-b8ca-202bbcd7c50a",
    },
    starttime: "2022-01-08T07:10:28.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:03.889399Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
    ],
    creation_timestamp: "2021-03-30T19:22:22.299",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
    daac_process_complete_timestamp: "2021-03-30T19:46:11.931970Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
    ],
    daac_received_timestamp: "2021-03-30T19:46:11.931953Z",
    daac_submission_timestamp: "2021-03-30T19:46:11.931913Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 43,
      FileCreationDateTime: "2022-01-08T17:13:20.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/22/ingest-staged-NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35-20210330T192108.720456Z/output/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
      FileName:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:08.494667Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:22.288138Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 42,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:21:06.386Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "bFbHwapAAWagHVK1WBg9YTCPC+ModeNkZFQ/795YNFpy6p1dXExMUZEztoAgqnyKmZ3Mj2X9h8od4bp3uCcLUGzHZ+dSKk3n",
          "x-amz-request-id": "P7S7Z6Q5R6846R0K",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35.qac",
            sequencer: "0060637A239ED21F4F",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132068383",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132068382",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:21:06.386Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"P7S7Z6Q5R6846R0K","x-amz-id-2":"bFbHwapAAWagHVK1WBg9YTCPC+ModeNkZFQ/795YNFpy6p1dXExMUZEztoAgqnyKmZ3Mj2X9h8od4bp3uCcLUGzHZ+dSKk3n"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A239ED21F4F"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "129726d38133005d2b5d5eee83357c7d",
        messageAttributes: {},
        messageId: "f3be3172-5c92-4f72-98dd-286b40afe1f3",
        receiptHandle:
          "AQEB+ruJEmjbNMDWDdjokbk0chiXKD1aBPnL45p3bYK/3DkvG9VqaaEUfd05JLuk1eKTh4i7M9izO4+uPlzLjLV1QAuaFLGUjfdVitmzdUb5q5GQqQUdfJQVA67iIPfOmpyI76NmPgrfIasj49M0DBip1x26e126j8sv0pVJbAVpcKEJnM2IxSg2E2x65lihQRR3wZ1EGxq9+v/N3z8ck12oBlBzg2JtGJUhBjvzd3fa4Ii+PHpuIkoxuYyHF/s4RcEl+zeFXgQnQ5qy3ovrPgZN0OIDbf2SmDtws5FfcIq9dDa/f0E4Sk8FrX/bsl7BuNBJLBs/cdUfBw2MvZ3P4xL5iUJ94gDQ3a7yd9LZ60BdkILejbyAx40155YVWgIMUrQRwaeLVfrypzn9Y7Hq4jwd74Q/IGKnWiTvJq/XWU/aX7U=",
      },
      Station: "PA",
      VCID: 35,
      id:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35.qac",
      ],
      wasGeneratedBy: "task_id:37dcd0d7-dae8-40d4-85ee-1105f29121a9",
    },
    starttime: "2022-01-08T17:13:20.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:30.105655Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:50.121",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:22.668652Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:22.668632Z",
    daac_submission_timestamp: "2021-03-30T19:46:22.668289Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "WG5",
      Channel: 51,
      FileCreationDateTime: "2022-01-08T09:00:32.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24-20210330T192056.784808Z/output/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
      FileName:
        "NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:56.538053Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:50.109901Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 50,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:54.136Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "DRIRM2xyTf+5N5VwDnI7fw0njXl7E3SXMZ3DsuyUHPsKBXrrV7xt7q5CUeRGnFD7b8qb4iFFbP99T88AVzLvk2eEYqRr1lm6",
          "x-amz-request-id": "5JEJE1KW4QNKCRRK",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24.qac",
            sequencer: "0060637A173C9A62F8",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132056432",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132056431",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:54.136Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"5JEJE1KW4QNKCRRK","x-amz-id-2":"DRIRM2xyTf+5N5VwDnI7fw0njXl7E3SXMZ3DsuyUHPsKBXrrV7xt7q5CUeRGnFD7b8qb4iFFbP99T88AVzLvk2eEYqRr1lm6"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A173C9A62F8"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "042463df1124ce3e328c22d9d85bc268",
        messageAttributes: {},
        messageId: "4f6b8428-c24f-44e7-b15e-69e2421d90af",
        receiptHandle:
          "AQEBo6PnCVpl0Zeik/pyyTOL++4qILtx7/WACK0rBZ8q63N4yk3c/gQ+7Hl48OpQlWQKFo2sN+zQL9rJlwBqoRvDDcQmnDLTl/ZzshVDWlPo5Beas4gKmqYanCpVlW4oTxO8l9IbDEIAfxadBM9dWYTYNMCvEzpLYzejOIKzFNjL2PLzyQQ4FAL01+YC3WDAIux6rYGW0jS628XGGw5HJCWnkJOfiIMXMbK/l+VWmvEZGQ0e/8l3jcVfzkCXYSHX9QSM7iKDel1Uw7N74pNvjO09Ui2iDQo5EdQqBZ0AMjHBYe1RqOwSOeIPP/l5RhRxF3OS8Z97OR+IyeBRoKz9p93bowPVCuW4NCKgkdDlEgJk6IgKdSjkk330rfg2NsfhE51acN4yhpFCF4SSguYhg6baYTfOq2Z1dw8+nElTizB+IvQ=",
      },
      Station: "SGS",
      VCID: 24,
      id:
        "NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:3e893ddf-158d-433f-ad44-5a5a6726a03d",
    },
    starttime: "2022-01-08T09:00:32.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:31.712301Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:11.705",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:25.080461Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:25.080425Z",
    daac_submission_timestamp: "2021-03-30T19:46:25.079994Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 12,
      FileCreationDateTime: "2022-01-08T08:20:16.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29-20210330T192039.236825Z/output/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:39.036600Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:11.694641Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 11,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:36.997Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "fMv0Gu0xl8/gCsmKVrWrdPwU9SERFOCtXYPrRzHTgSQdx+vS9yiJcsfSii7F9DtlSMANM6C1iZVKFYNsFmcvRuGxAsNidqJR",
          "x-amz-request-id": "JMRPX089XY3AVZE5",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29.qac",
            sequencer: "0060637A05D1BC78AD",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132038925",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132038924",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:36.997Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"JMRPX089XY3AVZE5","x-amz-id-2":"fMv0Gu0xl8/gCsmKVrWrdPwU9SERFOCtXYPrRzHTgSQdx+vS9yiJcsfSii7F9DtlSMANM6C1iZVKFYNsFmcvRuGxAsNidqJR"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A05D1BC78AD"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "af22e6cc68bf8aa1caa6f2735855e7a9",
        messageAttributes: {},
        messageId: "773ac87a-1635-48db-8c39-c9c709abd8da",
        receiptHandle:
          "AQEBGa4Zjjtmw+QChvBaNoWJqaVsJmB0jBjpCgJo49+LOqWFCBQ3cnEwMcBr9YNrUlAdf7vhAjx2+vx1riXiGg/ZCjtB7COSqvGcU0ch5WDXkW/pskGvny6C5x2JLq27XUFK2t8F4sWNI2/ydqrYGcVRDoomqrXkUTjnAKUxqVx2xvXoMygyr02hT/97lNwPrG061HzBZ4XcSthC7iXxi/0uOcOZWosM7Bxn3HhN4aiZkL2a1sjoGNbjt2ksXQ4cp+sfsuGC7fOoAn1ftrm/9/IUGl327jkR3An63pt4cMpKyknMBINC79LCwQuLzNvA55v0cg7ilnj4Yi6r0nU6U7tgDRvP8k2OoZSvGi0xCoVvprz/PghkzwqgoKgqYxqf9xvKrAZw80B0Vo1RRJZd0H1KdDkantTPdwkJz95YfXqVuao=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:5709ef96-3059-480a-86cd-72dce99d3269",
    },
    starttime: "2022-01-08T08:20:16.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:35.253385Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:18.929",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:26.444951Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:26.444918Z",
    daac_submission_timestamp: "2021-03-30T19:46:26.444495Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 32,
      FileCreationDateTime: "2020-01-08T07:10:28.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29-20210330T192012.381830Z/output/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:12.133619Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:18.918648Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 31,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:10.297Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "dI63ITPsZq3Ns74zUQJRA/kMVZizAkoIIpqoMd1JSzNXeKkmQKzafp8Lxu3TbpfFl+jGRWQ0QAMEUGPAX0ijczO0jzIf+hKw",
          "x-amz-request-id": "ZZVYG7EGABBAPEP1",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29.qac",
            sequencer: "00606379EAC139B252",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132012036",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132012031",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:10.297Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"ZZVYG7EGABBAPEP1","x-amz-id-2":"dI63ITPsZq3Ns74zUQJRA/kMVZizAkoIIpqoMd1JSzNXeKkmQKzafp8Lxu3TbpfFl+jGRWQ0QAMEUGPAX0ijczO0jzIf+hKw"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379EAC139B252"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "27790e8c9e84b1a5f2e7cc89ed7a6194",
        messageAttributes: {},
        messageId: "43204a65-dcaa-4c9b-9527-876af2429d78",
        receiptHandle:
          "AQEBLIkiun4ZR7F3nQwQJUeQU/9go9w55bXe3ml9SrZd66Zm+Ai9yacIbF4pU21aYG1RhHRPQNoqYilAJ6vKInTEYVGVNseIVR6nd/V99iZqIuux3hj4k2ZDhB7PDXvE5GXy6guIDrjpGBQZTJEA+5tt/JRGbjbsSbsv9WodMz8l9WrHg1g3bF41Xg/5yiSGqhTbAUsj/dEXJONlSG3X8ENdi3KRfI0/Ps0vOp58T+XLeDps1Dv/qPpq+WwcR7R/UN4qsRxbSCcegP3Ivwg08ZmBBwF8iEqbsFlvBpE7mVR90XejfJd+E3molG4CXcuZN0nj867/CseO/bmk4mWSBvjp9eVfNSD7u8C3PKM0aU7272ZkitIBV1qU6nwIJXy95Z6re90YXtoXlQod9IPseXHTTVz711ErORwkfBup1lgMP/c=",
      },
      Station: "ASF",
      VCID: 29,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:df4e09a3-f405-4923-83f8-9b6c4d657113",
    },
    starttime: "2020-01-08T07:10:28.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:35.291650Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:40.463",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:27.506897Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:27.506878Z",
    daac_submission_timestamp: "2021-03-30T19:46:27.506614Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 32,
      FileCreationDateTime: "2022-01-08T07:25:59.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24-20210330T192023.496922Z/output/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
      FileName:
        "NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:23.229986Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:40.450754Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 31,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:21.804Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "FUP30TGHp6/tlVR5H36qh3B80NfzftTwQ/51Mr8LvgRFZ5kt1eO0C6qGae1GQtqkNpUNU5Dft5jC06CZnZgJe77ZvULiz0JQ",
          "x-amz-request-id": "8E8DDGRZ018Q1D3C",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24.qac",
            sequencer: "00606379F66E58421D",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132023129",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132023128",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:21.804Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"8E8DDGRZ018Q1D3C","x-amz-id-2":"FUP30TGHp6/tlVR5H36qh3B80NfzftTwQ/51Mr8LvgRFZ5kt1eO0C6qGae1GQtqkNpUNU5Dft5jC06CZnZgJe77ZvULiz0JQ"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379F66E58421D"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "9e88444a85672dccdd1d636d3c8040a4",
        messageAttributes: {},
        messageId: "489efafe-d97d-4f94-b2c6-e69c809dde42",
        receiptHandle:
          "AQEBRSHZTPCHk7g9cQct29FyxWe2tNJCwc7BNYTH0xNLVkBovZRHaTNFOHgHgwiyL0F30B9tAxTSqzOsdmIOnUF8fykSonrvvUqLi1iLdRvkxTc8wojSbq0enb8JTloeyuVN8NxvD9eyXPqRE3oiPGSgqH1Gl7aS7De5eUkW+Ob995DONuR1CP91cTyXgCARHi58ZgFazlfT2NVyJdOVS+++8QxzWVNwN83wzPU1jCVIn8CB0oJrNRDm++yhHaMhJuqrWr7RdBQayNL3oRy6aTohtYHJ7kvU6C413oKgZD/VslcmnQCYnyv0RIQhAhsPtlJ3k98q40KDFgIU9bUL5mow7lQeOnuhFihfVYDOOOtu/Rf3jdncU0X5cgXs/bynXmGHGRQRxLtzSpqupTjyrky3BEaPWpWdoxkO36ynMSGF0qY=",
      },
      Station: "ASF",
      VCID: 24,
      id:
        "NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:c9864c06-c086-4157-aeb5-3752f0489add",
    },
    starttime: "2022-01-08T07:25:59.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:28.601609Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:12.816",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:22.324223Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:22.324195Z",
    daac_submission_timestamp: "2021-03-30T19:46:22.323790Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 22,
      FileCreationDateTime: "2022-01-08T07:34:00.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24-20210330T192040.492648Z/output/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:40.273274Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:12.805438Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 21,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:38.314Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "sALocheIpnBAuHoeBCXptTr+Q2AZV/3q7CuJPlhOuBKgOaf24a+XerNzW1MwnLgZyn7bEpamZVUzEmwtP1y541f0qWghQojb",
          "x-amz-request-id": "35BVPP855XZF2KS8",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24.qac",
            sequencer: "0060637A072578A9EC",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132040167",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132040126",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:38.314Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"35BVPP855XZF2KS8","x-amz-id-2":"sALocheIpnBAuHoeBCXptTr+Q2AZV/3q7CuJPlhOuBKgOaf24a+XerNzW1MwnLgZyn7bEpamZVUzEmwtP1y541f0qWghQojb"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A072578A9EC"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c42d8676434f59129b634ce6fe3721dd",
        messageAttributes: {},
        messageId: "ab2b8469-9620-4822-83df-200333ff0b40",
        receiptHandle:
          "AQEBZjLBUiKVKTBrDu0BBp5cwPJPZRJfajspDSm93AiTil44EbfJFd9R9OMlsQ7qvhWga9JSvHPu4mXJ/aESu0lHENWHuyhjV5rbNDXzCsLQ2F5O57QO6QzB5uuFBgsPL5jK9cIXNNPkBmrLCcaPDxVLbpj+XUfRmY7ZziX/LftNMqm87OZ19xnnCIr0V6kaexSuBezywUYsZz7+L4HMCkFuLEGGsOfB23uVeOhnuGo42KATCh5tlj3ugoEDCJJKI/1RzDXeefEL7gGOXRL4kJRQ8MwHrVjNzU2rfFDAT+hnNBAlQHA9JFwdLSALc76hPg6KW2sRZD2n93y0azKOrbGQaKzKZiUG56wdExAP845T3FskXec6yyNcVsXVPY+q2WcTSagIO5sLtEechggZ94rXjlGK4sXpBxKyEkZWQ7DpAgo=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:2b7b4457-ec75-43a0-bfa2-ba3a741cc4b1",
    },
    starttime: "2022-01-08T07:34:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:22.445615Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:25.031",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:17.131157Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:17.131135Z",
    daac_submission_timestamp: "2021-03-30T19:46:17.130859Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "WG5",
      Channel: 6,
      FileCreationDateTime: "2022-01-08T08:15:56.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24-20210330T192045.942851Z/output/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
      FileName:
        "NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:45.694324Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:25.023649Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 5,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:43.289Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "M71R74RBox4u8EyAP4Aw/K0ffBwqF4gHndnxBoMKesle4zsKfA5+MSkDBUZYIiwKSbacMHY2vPZAA/gLBxWOxXqcweya6mr9",
          "x-amz-request-id": "6WBTHV51TRHG04C4",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24.qac",
            sequencer: "0060637A0C306076DF",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132045571",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132045570",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:43.289Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"6WBTHV51TRHG04C4","x-amz-id-2":"M71R74RBox4u8EyAP4Aw/K0ffBwqF4gHndnxBoMKesle4zsKfA5+MSkDBUZYIiwKSbacMHY2vPZAA/gLBxWOxXqcweya6mr9"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A0C306076DF"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "382cca90b3d7a08833a502070bb2cdaf",
        messageAttributes: {},
        messageId: "c0d8ad5b-b8ff-4d57-b930-fdb388742b25",
        receiptHandle:
          "AQEBcIiM5g1iksTZ1PcnKhu6Tv6irbcrJPG1cj6kkAnMVQ+rpfxTha0tE6jImm1f/VapXBfMCRHnqzz+RtaRkTzdh7AOI4Rl1ZWImr/rXhjX/tQFQCuoR40a4U2qdlgPORVoXID0tciBR/jucBOzTrNzZ/VIXukAdd8sVZT6IpwlG7S5Dt4Mo4PXiMvpfluWfKPBYX8mM4ELz5B0c0/H25Rpk/mBPgIjv7sEj137A6rbelr2jjfT9xJTxv3vLvJJv6a9XRoiNDjAqCAWJV0KAHgT3eisOCO3Pmnkqanu++XJ2XFl6/OX+5r/mnImBrX8jCkAlSocuuVv/xFLR8PPv3B0ce+0L8icZBrRKno9EN4sX0c6EDtU9o/boJ1JEsLWlLWcq5fd2Dk2e00r9yYWTfHbnzojV423M1jD8O3BVoPeXQE=",
      },
      Station: "WFF",
      VCID: 24,
      id:
        "NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:56320ee0-3001-4638-8c62-ac8b74a48b2f",
    },
    starttime: "2022-01-08T08:15:56.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:32.664491Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:07.436",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:24.725724Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:24.725687Z",
    daac_submission_timestamp: "2021-03-30T19:46:24.725113Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 64,
      FileCreationDateTime: "2022-01-08T07:59:59.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29-20210330T192035.470011Z/output/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
      FileName:
        "NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:35.229820Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:07.426123Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 64,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:32.836Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "60kFuQkvun76BCS/VsZMtfpmLv6vbCeQOBu2bqKSUdmUFNDQciteV1Vj+3QMGYh82aea/cyLjZDtbNREWyuaKHjpue0zYHuD",
          "x-amz-request-id": "C0FJD91STJ3WWESW",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29.qac",
            sequencer: "0060637A019BCCCD82",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132035133",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132035132",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:32.836Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"C0FJD91STJ3WWESW","x-amz-id-2":"60kFuQkvun76BCS/VsZMtfpmLv6vbCeQOBu2bqKSUdmUFNDQciteV1Vj+3QMGYh82aea/cyLjZDtbNREWyuaKHjpue0zYHuD"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A019BCCCD82"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "0ebcf503a76110c5831cfd727e2c9a12",
        messageAttributes: {},
        messageId: "64fed638-9256-4c6e-a8b8-40c1c9360432",
        receiptHandle:
          "AQEBgI/0M10cIj9BnCCbIpJbG0zgXxNwplJb5V7FJIstS8o1IphIw9gTq9kIurJUalFSIdAgzL3fWprKacdDTjrCUYb558yW/3DeuUPG3S/8ji0R7jxVvS0ra4VNEErW06+046lbFFHsF/BvPSzz1VeULBBU6CuwCg2iDI0Z5BbKLNiE/iv2sxT6H79u1iKSPCOEhMZ2fIERsofc27N9Jg257HUUsxHCIv68thuK8AJmG/lEX0d3aUF923VsMW+pjr3WbkgLzhdu7/xCi5XjMAGDw1YnnItr5nDbtmtVBQrZDxeO9HHbMig/G+3Rp8SbW3rnKKPZ2xxcdvldOgP85YXxz8PIhDJtfObfgmtVuO+ZXgp+fx4nSsk7UcQTFMgG7bq8BJWo/lHSP2aU7kIb6K7yJMTKDfqKsnGpNaAWK1i5hlg=",
      },
      Station: "WFF",
      VCID: 29,
      id:
        "NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:f08e4663-8897-4c06-8376-5c96a2654a52",
    },
    starttime: "2022-01-08T07:59:59.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:30.240819Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:21:50.554",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:23.007910Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:23.007889Z",
    daac_submission_timestamp: "2021-03-30T19:46:23.007580Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "WG5",
      Channel: 97,
      FileCreationDateTime: "2022-01-08T09:03:16.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29-20210330T192057.317120Z/output/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
      FileName:
        "NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:57.075919Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:50.543934Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 96,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:55.390Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "MbStL0cjEAKbAkrS1y8BZzBUQiee0aZYGnAAouzcaBwcOZ7eU2VeUrXePnx56h1T32s2YamUCBy+8IjWgsXsrI6DeI5i6Ck4",
          "x-amz-request-id": "V8CNFAJDJAWPDEHH",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29.qac",
            sequencer: "0060637A187A544156",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132056978",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132056977",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:55.390Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"V8CNFAJDJAWPDEHH","x-amz-id-2":"MbStL0cjEAKbAkrS1y8BZzBUQiee0aZYGnAAouzcaBwcOZ7eU2VeUrXePnx56h1T32s2YamUCBy+8IjWgsXsrI6DeI5i6Ck4"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A187A544156"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c51847dac5fa6a38ebb4cd7f2e9c861b",
        messageAttributes: {},
        messageId: "a8b55475-f7c5-44db-9419-2464bd78d7a3",
        receiptHandle:
          "AQEB9U7RvK16WRh9BcBgzk3suM0qgiHBsYwNZZt2XA2pidDisA0pJvPc6qh3A4Y/phpLMUVvbsn+1x7RdJFkEYP5J3XtPXU/iaDfP1Vk13A5/TIYAo2FaiHARwSqXefpePyD1LJB3TigWFVTSkeb8GMxIaM/YAe9OtC+7g4kd2pO6pUMs+IHcLnVRLLpSUx2LuzVdkX3V54PIqnDMipCqfb2CLr3xocFoMEXBB/LNtoyjzGdzo2ClRI7+qI7+VkJKj56UAB9F2cEtg4LXY8IaqqgxsvNfi/0slusgEvP/C8EBVhbOABlI0oCkRUV3StVK0WgeukKTV2HMXh2DhWAgyQi4O2M6/hPJExWd28k0PLEIPzAkJwOdIFb9w7sGRaUw+5s2UeaBJQ/oFiMYKNRWjk6YcgrBQdV41KoqXhrJi7QRPU=",
      },
      Station: "SGS",
      VCID: 29,
      id:
        "NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:e1e1be8b-63e5-46d1-8e1b-492c550616cd",
    },
    starttime: "2022-01-08T09:03:16.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:33.081691Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:36.783",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:11.540921Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:11.540902Z",
    daac_submission_timestamp: "2021-03-30T19:46:11.540599Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "PA12",
      Channel: 23,
      FileCreationDateTime: "2022-01-08T07:28:45.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29-20210330T192020.704579Z/output/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
      FileName:
        "NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:20.394358Z",
      Mission: "NISAR",
      Mode: 1,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:36.773100Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 22,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:18.201Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "RWAARWmixzppw7RafIU/WsKfYxxAhJUuhH77JOS24tieSZf7JFdMH07D+AFJbBr/pjW1W6OJhL9myQIoE1iIMvqynxdl2UUG",
          "x-amz-request-id": "NW5CZF3KBFF65WB8",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29.qac",
            sequencer: "00606379F2C726C88D",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132019927",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132019926",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:18.201Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"NW5CZF3KBFF65WB8","x-amz-id-2":"RWAARWmixzppw7RafIU/WsKfYxxAhJUuhH77JOS24tieSZf7JFdMH07D+AFJbBr/pjW1W6OJhL9myQIoE1iIMvqynxdl2UUG"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379F2C726C88D"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "178e9bbc56a55e9e0ccb57e265b26d66",
        messageAttributes: {},
        messageId: "a95fc7f0-6fa8-449c-9a64-ff21aa836235",
        receiptHandle:
          "AQEBdYldHmAsgdrtrIvAFE1DoQwY7EfveOpkM8XHgfxjShbZdy8UR2y/WYMz+/D1elG/q50bGaSvBMrIBut45r9ixuxT+CQuq6Dm6SxlZ4U/aGv9r7UL5ikGspNcPGaYKStfHLdWR83/c3nWNIIIftgQSM+p657ZCjP5aApDdkdDKiCO4Zgqcx2UTzR9s4B9mGVBrWjbK2M5ErHP7qo2cbBnYcidjdSrrQ7SBz2vWMNVAqz3L9yU+O4GVt8vjxTzQImeLGu/wE1QrbkFllW8FORuOHBxhc8plZ4aNJ0xv9KDbNbDnvmF9JqUO6UQlSARvaph2XVg3VgRQX4ZqwN0wYmLjoymZNIPswbP0oOrzKLLXs/jZ4I4J0buA9CoveIHxyAftSLo1nNegGPhEL+0Z2Otnz+PS0gmMpMElt1nqaugIro=",
      },
      Station: "ASF",
      VCID: 29,
      id:
        "NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:69b5c55d-568f-43d0-b8ad-0ed48b5f8c6b",
    },
    starttime: "2022-01-08T07:28:45.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:19.627459Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:22:04.876",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:16.081067Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:16.081051Z",
    daac_submission_timestamp: "2021-03-30T19:46:16.081011Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 43,
      FileCreationDateTime: "2022-01-08T09:03:26.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29-20210330T192102.303063Z/output/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
      FileName:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:02.093195Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:04.867299Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 42,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:59.746Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "csaEjzv3S632PflTPnr03KA4tQGyJs7hkcylM2XubPvRV2rxTA+LlcDR8QEBON1NeFNod6hc9E+ZR3iOEIFGDfrmeQf3g8sg",
          "x-amz-request-id": "3RG278K4RFNBTF23",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29.qac",
            sequencer: "0060637A1CDBC6DD61",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132061979",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132061978",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:59.746Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"3RG278K4RFNBTF23","x-amz-id-2":"csaEjzv3S632PflTPnr03KA4tQGyJs7hkcylM2XubPvRV2rxTA+LlcDR8QEBON1NeFNod6hc9E+ZR3iOEIFGDfrmeQf3g8sg"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A1CDBC6DD61"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "6b0557421591b14f2c3028864901c980",
        messageAttributes: {},
        messageId: "967dc3e4-81ed-425c-b7df-a8a82fba1009",
        receiptHandle:
          "AQEBmM9K7tdBBYDkYC/GNj6jFvlLBK6yVC9jqemjFg7eHpQcrH5kaE/V19LTvkh3xWPWjQKF40YhHgvclB5J2SCymZdfj5TPELftwnhmeYx4RPfK3Q7e6FHv0ZFkRHtHe2YjrpM36uwTAi6C1WJprXzOjf1Mn9U7YftPSf9TYlOUXpJptZKqt/i0vaFL8Bi8+6lWU2X/V6JtpOyobp3wMw4flWk0Z2T1utzpGJP9AvLjWWA3wzK46fsITyqdLbSyyp3+HukSSzJNux+51Gs5mYC9Q8si6rmpboVBkEnEtIuC1UqTiTXi4uGFiUtZTl+w2b1fxfaiUUW3WprH3aLom43SYFti+VV6Kx8q1osS2qubqL0tvVLDtelDScCes9OepMTL31CpGuDVcjZkxEd26cJU3mFtoN6ZOaez9zDP86vU7j0=",
      },
      Station: "PA",
      VCID: 29,
      id:
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:d016e27a-1acc-4a73-90aa-73cc4d57c80c",
    },
    starttime: "2022-01-08T09:03:26.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:15.500356Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:15.796",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:10.432170Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:10.432150Z",
    daac_submission_timestamp: "2021-03-30T19:46:10.431888Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 5,
      FileCreationDateTime: "2020-01-08T07:10:28.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24-20210330T192009.194993Z/output/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:08.992285Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:15.785412Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 4,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:07.702Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "pgv6M0RhLicph0hFsJTDGLWWPfEXS9juozU11tk9TTGXUudaTE4mkuH2kpM/eYpnb+G66WS3JDAHF/jMQYfrk6CCjsXynIJE",
          "x-amz-request-id": "HPZQYY1MQX1YRCN6",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24.qac",
            sequencer: "00606379E8164130D4",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132008856",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132008854",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:07.702Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"HPZQYY1MQX1YRCN6","x-amz-id-2":"pgv6M0RhLicph0hFsJTDGLWWPfEXS9juozU11tk9TTGXUudaTE4mkuH2kpM/eYpnb+G66WS3JDAHF/jMQYfrk6CCjsXynIJE"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379E8164130D4"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "83d41bf2e79980cc84e3e202a01e1ad5",
        messageAttributes: {},
        messageId: "fee26ae6-8324-4dc2-ac24-425ac20c8f30",
        receiptHandle:
          "AQEBuWmpkFU5KxEhmXTaSJnAEG9eeMI0fL3iztndL2BkyoIRNz+mL8sZlbSSIXdr8l/tieYa4zQX2IkkoKsc/V5yqeFmvxoxi6oFFyFQu8khW38/WLA7fS3dBEei+xBhLpAVf6LdNfF0TNgmTcApHe3b8BV9TQgB2rXnpzWnGHE9xoDQYfQEaidR0Q/2zfNq4OtP36Ox6UfUfqmCAMvf9Ar1VChJFl8px6GT63wK9aPUxe/0V0REhYddYQz4cva/JYVnd/ACLjVvFwcDTlJbScUT+2He2tGW2thKpWLlutDpu7gQ0Tq/E2kFP9pAhDwy6o6Q6uYP1rY2lZVRR20TvjQtQYuGERJFdW6djHY+MQCDCVra1La0yZQ6uyISK3C8XnQS1lABmSKSUs6ZIou/hjEmDhj58dbMOClJIIwv9DdDmgI=",
      },
      Station: "ASF",
      VCID: 24,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:cdc05af1-d1ff-4603-9d28-132ef0974f22",
    },
    starttime: "2020-01-08T07:10:28.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2020/008/NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:22.458574Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:41.512",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:17.472922Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:17.472904Z",
    daac_submission_timestamp: "2021-03-30T19:46:17.472625Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 34,
      FileCreationDateTime: "2022-01-08T08:25:36.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24-20210330T192051.421009Z/output/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
      FileName:
        "NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:51.216338Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:41.504662Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 33,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:49.073Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "jP5A5f7KMpL7QS3MLmDOSZ4N//KH5eVh7zhbWIyDdr5dfGRrAvwUaA35RHI4UMk9EwcwK8rUmyLUFn13VDz10XxT9zAx4Z/d",
          "x-amz-request-id": "D0R0NK6Q3T727226",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24.qac",
            sequencer: "0060637A1212C7EEE0",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132051102",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132051093",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:49.073Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"D0R0NK6Q3T727226","x-amz-id-2":"jP5A5f7KMpL7QS3MLmDOSZ4N//KH5eVh7zhbWIyDdr5dfGRrAvwUaA35RHI4UMk9EwcwK8rUmyLUFn13VDz10XxT9zAx4Z/d"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A1212C7EEE0"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "58a6fc20ad8338f24a713972c2056e87",
        messageAttributes: {},
        messageId: "f81b1df0-8397-4d29-831f-9a2836eab896",
        receiptHandle:
          "AQEBne8CXRi4eEyfhnU6QUCAzDLuon/IN2PJCIsH4a5pOOui43c5U3EnRHwlJAVo9YvjPE+k90j3YpDPPVQGXuDGJx1+aUuyDd04yv//MUbEvJh7VYKl7bIUJbzeDYpr5OEsnlfRRjCzyRqakhvaUnZyNdrFVJaia3GwS2DdXaz4G+c3llKgRA8sCY5kOhAZD7qxJagXhZDC3tiGWIfx213oAnH9UBmHYpuuDhge0fgafIKSy8JR4FJZCaxCH6PbpUS2LkQLJt03DUdVM2FCDTO1HBe2iZ0B0V4kXBs+XsVD0Cu7mXha45H7MHON69ErqHyK2P3GkjkepNCb3G+sgf2nncHFCDbGxQW3+DX5hARj4ECBNWBQicWhWAybFkYfgCjfQFW0CjzSNkYpcaQVQWSOX7rcfLqCKSxLG6W4kisf/ng=",
      },
      Station: "SGS",
      VCID: 24,
      id:
        "NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:74ffdc3d-be59-4758-ac23-5c2c30cce562",
    },
    starttime: "2022-01-08T08:25:36.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:26.929956Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:20:37.381",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:21.641775Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:21.641752Z",
    daac_submission_timestamp: "2021-03-30T19:46:21.641412Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "SG11",
      Channel: 23,
      FileCreationDateTime: "2022-01-08T07:28:34.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24-20210330T192023.383784Z/output/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
      FileName:
        "NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:23.157841Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:37.373555Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 22,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:20.613Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "N0bSTAHy/T2PcxWbScjNhAkWCPJNOM+iDXpQvQEJxOYYb+WNOoSQe2fRUUo2NopKOkZr7+scHqg1Zn7eB4Nrj7I6XpRpaCR+",
          "x-amz-request-id": "MRBFHHM334GHC8BH",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24.qac",
            sequencer: "00606379F53888A860",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132023021",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132023020",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:20.613Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"MRBFHHM334GHC8BH","x-amz-id-2":"N0bSTAHy/T2PcxWbScjNhAkWCPJNOM+iDXpQvQEJxOYYb+WNOoSQe2fRUUo2NopKOkZr7+scHqg1Zn7eB4Nrj7I6XpRpaCR+"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379F53888A860"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "5b3cdce485cbfe6593e3779778177345",
        messageAttributes: {},
        messageId: "44547ff9-3670-45ad-a484-54df11cd52a4",
        receiptHandle:
          "AQEB/jAyLCDYWNwT3H2ZNBJ8Pdu936CALt45TJumlhuoa6Ae7YSQELTEeey1acYJVBHD8K9BmpRPQETwk8+lalTBGYAEdpnP+CkvK4s6y120n2euEidFj3kbDE4tR3yLxDiiNjtgF4fxYtURQb/CC5fyvB61em7sbmx0IEw6wgnYPuBDvAJhZIv4tRqymt1xN09X6v51Vej9grRATplKoLVvTKs8SthYD4cpzgoGBcE4fTntMScHj9DX194Q3HMLZa5XIYzo1MLxn6QDevO33mAHwSnnxZv2BF8NbCEVpl/dtPsy74uCGx+GT0t4tMRbbVlhVZuEqcx3sAsZ9/Zg1GF7RgmzXsjkLM6ECDgTMnE6kD3gH62yTrIUzBsWhSDbjk2L4G7JGGV/4ulbDLuPX8NE+ujaVtgj4ZUWQdYkN1a6D+0=",
      },
      Station: "ASF",
      VCID: 24,
      id:
        "NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
      restaged: false,
      tags: ["daac_delivered", "ISL"],
    },
    objectid:
      "NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:0c014817-401e-4559-aaa0-dffeeba96621",
    },
    starttime: "2022-01-08T07:28:34.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:27.928750Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
    ],
    creation_timestamp: "2021-03-30T19:20:23.145",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
    daac_process_complete_timestamp: "2021-03-30T19:46:21.292939Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
    ],
    daac_received_timestamp: "2021-03-30T19:46:21.292922Z",
    daac_submission_timestamp: "2021-03-30T19:46:21.292882Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 31,
      FileCreationDateTime: "2022-01-08T07:28:30.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29-20210330T192016.645008Z/output/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
      FileName:
        "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:16.398646Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 114,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:23.136220Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 30,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:14.597Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "12vwKEnKK9hqoHxqQaDmEhdUW0J3Rmv/1BEGQC/uyXnxmQ09T3n+N+cRtHGdWMcwLLiyIzp80lpMmtrj02F30uT0LbMjYBrN",
          "x-amz-request-id": "0W1ZECJ6NTF9KNVH",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29.qac",
            sequencer: "00606379EF1FDBD2E4",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132016299",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132016298",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:14.597Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"0W1ZECJ6NTF9KNVH","x-amz-id-2":"12vwKEnKK9hqoHxqQaDmEhdUW0J3Rmv/1BEGQC/uyXnxmQ09T3n+N+cRtHGdWMcwLLiyIzp80lpMmtrj02F30uT0LbMjYBrN"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"00606379EF1FDBD2E4"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "d68852aac75b0b4c1c05c2ba1318504e",
        messageAttributes: {},
        messageId: "4e420afd-22a1-4ced-a798-08e2b773c5a0",
        receiptHandle:
          "AQEB9e+6njDIcSoEE6P7Ahd4OpPbEN2sYstps40S0ZZHbmz9IaJWFQK5eU9HFF2j7a/wZBsEoEfyUY4lf7gVJKO7PANrPigCyg5hupLS/XzLqdoaWZU4RwRrYkHeLOry0UGl+VgA19iPbnRQSxFLkUc3ujpGv87GpoyW/MmBVVtXmq6mYbimcky/KGgDc9Nuj3ba1pmBIY+3V98/uXeut6+GRSzlBUqMSP7Yz0YBGKlxcB52kAClHqS/FZnm2/seqLmN1ldgUZiqZo89UVjmbyynROkJKa+5MVI4tvt7b6Eyigw5FBRjLtUbr+SxeEHCPxEQo8Zu4DmwuMuiYXKbw+1UfmGzwIjBjCCwmct06Y9Q3eiaCVqdkT1MoFWv6QzEj0APIk4MZgGyMM03mj3H12JPsf3zY/ZnuXbn9gxwDmZvlVI=",
      },
      Station: "ASF",
      VCID: 29,
      id:
        "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29.qac",
      ],
      wasGeneratedBy: "task_id:0dbdeaaa-9d98-40e1-85d5-2b9569cf0c78",
    },
    starttime: "2022-01-08T07:28:30.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:37.084959Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:22:08.177",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:28.901626Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:28.901604Z",
    daac_submission_timestamp: "2021-03-30T19:46:28.901288Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "AS4",
      Channel: 49,
      FileCreationDateTime: "2022-01-08T09:03:26.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/22/ingest-staged-NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24-20210330T192105.354229Z/output/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
      FileName:
        "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:05.049002Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:08.165449Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 48,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:21:02.304Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "rFKFZabHi+ksSAVcdTMaAfmxJbXeGhO2KfEnAiU4RnwQsaOAmYEpbNQA7xSg/SXa4DyLq1DU2A4iWHE17MGcAZhnJhVGMulv",
          "x-amz-request-id": "9KYDKSC7CJNFYDJH",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24.qac",
            sequencer: "0060637A1F7685985B",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132064928",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132064926",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:21:02.304Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"9KYDKSC7CJNFYDJH","x-amz-id-2":"rFKFZabHi+ksSAVcdTMaAfmxJbXeGhO2KfEnAiU4RnwQsaOAmYEpbNQA7xSg/SXa4DyLq1DU2A4iWHE17MGcAZhnJhVGMulv"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A1F7685985B"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "1c900b098daecb5f8603e26b906d7574",
        messageAttributes: {},
        messageId: "aa6520b2-e0e8-4751-b73f-c948a497f026",
        receiptHandle:
          "AQEBpCSK24SAvtwAF3OTpqOT2Y65UmrD2xsb5iDLVRn8VC7RJ7/6tfYpMujQufQl0irrkpICDHNagTpOhhKIQ2FQBdlhRnNixShONr1Nw9vlmDKzRJCHf+b/0p+tGH75KeZHWiEEq0pXc9EW8KSUl+Kyp8yt1H2ztim+1J0qaS73OKFO8p7edHkmalF0BA2UGV5mQ+VN49eYWtwNKRy6zl0+9yWyDw+gGLCKd3RT2c1sOJY6JEVJm/FE1/N+foKWAwyUDhanW7hNmR1YYkDUyz1UYIZSPWvlFOlKNmDG1iuEAbSX7l7AwKlYfq4xX0HLrIIfpqXOR/mKpkVfnx7rrTwpqrwnCNVISUH3QfjVZWu9ETqQiNp9br0/Zs6RbrkL3h3Df1DNXRJPm0s0dnadUCwDFq3yRBvTcLaPNNMm9fRFbag=",
      },
      Station: "PA",
      VCID: 24,
      id:
        "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:6be6a84a-5c3f-4758-9993-e79e9d523680",
    },
    starttime: "2022-01-08T09:03:26.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:50:20.310295Z",
    browse_urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/browse/NEN_L_RRST/2022/008/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
    ],
    creation_timestamp: "2021-03-30T19:21:47.260",
    daac_catalog_id: "C1234208438-NISAR-TEST",
    daac_catalog_url: "http://some/cmr/url",
    daac_collection: "NEN_L_RRST",
    daac_delivery_status: "SUCCESS",
    daac_identifier:
      "NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
    daac_process_complete_timestamp: "2021-03-30T19:46:15.741052Z",
    daac_product_file_urls: [
      "http://some/daac/url/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
    ],
    daac_received_timestamp: "2021-03-30T19:46:15.741032Z",
    daac_submission_timestamp: "2021-03-30T19:46:15.740752Z",
    dataset: "NEN_L_RRST",
    dataset_level: "L0",
    dataset_type: "NEN_L_RRST",
    id:
      "NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
    images: [],
    ipath: "hysds::data/NEN_L_RRST",
    metadata: {
      Antenna: "PA12",
      Channel: 81,
      FileCreationDateTime: "2022-01-08T09:03:16.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24-20210330T192053.807179Z/output/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
      FileName:
        "NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
      FileSize: 29905,
      Group: 81,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24.qac",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:53.557827Z",
      Mission: "NISAR",
      Mode: 0,
      Pass: 115,
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:47.251587Z",
      ProductReceivedYear: 2021,
      ProductType: "NEN_L_RRST",
      Receiver: 80,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:51.590Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "XCYr8m1IeWjymk9py4bELy4Iz0OIOiITEuolPGR5u7BHF7g9c9Pty3giPB1Zo4P0+Lucw8mL2WSMyoFnMoRJHEN/e+cknkza",
          "x-amz-request-id": "ERM9Q85R1A2VG8M1",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e36fa9ee471aba9c55dcddf6232fa7a7",
            key:
              "tlm/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24.qac",
            sequencer: "0060637A1497BF27BE",
            size: 32,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SCID: 198,
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132053449",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132053448",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:51.590Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"ERM9Q85R1A2VG8M1","x-amz-id-2":"XCYr8m1IeWjymk9py4bELy4Iz0OIOiITEuolPGR5u7BHF7g9c9Pty3giPB1Zo4P0+Lucw8mL2WSMyoFnMoRJHEN/e+cknkza"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"tlm/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24.qac","size":32,"eTag":"e36fa9ee471aba9c55dcddf6232fa7a7","sequencer":"0060637A1497BF27BE"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "ffcafd80494e1e5f6eb86349abc533b7",
        messageAttributes: {},
        messageId: "79740be2-8524-4f0a-802c-83e099c627f8",
        receiptHandle:
          "AQEB0grmmQ83jktnOLc9iA0MOMyUKKZV+Hkq5ifWom/AEkDSF/r73IJ+V5wNSwMT9UluaVcup9qeoR4CPP4s8TEuLf7YLKLKc/ElqVy2bUBCoNyTgyONggmqTr7kafh2r8/YrxZp69asxVWNwzK5bGEoTvt9RhcOw0qsuci3V/C61PI8aoyumesdo+D7kbM8LGZQHLA9/nKkRAjVqygegYl1C5oPUxvNvbsx+Bjkfcad/bFRVpg8NBruNIOUsedZvX6h3Miv1Z4GQHpkftqzw/qdTwuLpxmhe6vOhSO8SR+BKDIh/NbdDqhFOMHQeENtVS+92UmeWZM8qlPUEvBhfHgIulN1KswuW4KseCyyZDC5Cf73aY+NaidEwOVbrqntOAQUZhz/pfbYTAmHFons/wkJl9dbZulpbGHZYKMQbbxiVxQ=",
      },
      Station: "SGS",
      VCID: 24,
      id:
        "NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
      restaged: false,
      tags: ["ISL", "daac_delivered"],
    },
    objectid:
      "NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/tlm/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24.qac",
      ],
      wasGeneratedBy: "task_id:63d02569-176e-405e-b54f-efe762443197",
    },
    starttime: "2022-01-08T09:03:16.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-rs-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-rs-fwd-bporeh/products/NEN_L_RRST/2022/008/NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:35.877440Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NOE/2020/05/04/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/NOE/2020/05/04/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
    ],
    creation_timestamp: "2021-03-30T19:18:28.230",
    dataset: "NOE",
    dataset_level: "NA",
    dataset_type: "NOE",
    endtime: "2020-05-04T23:44:42.000000Z",
    id: "NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
    images: [],
    ipath: "hysds::data/NOE",
    metadata: {
      CreationDateTime: "2020-05-04T14:50:19.000000Z",
      Fidelity: "NOE",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442.xml.gz-20210330T191744.477828Z/output/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
      FileName:
        "NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442.xml.gz",
      FileSize: 354,
      GranuleName: "NISAR_ANC_J_PR_NOE_20200504T225942_20200504T234442",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442.xml.gz",
      ],
      Instrument: "J",
      Lambda_trigger_time: "2021-03-30T19:17:44.256309Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:28.219683Z",
      ProductReceivedYear: 2021,
      ProductType: "NOE",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:40.349Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "Q0LnW+cRS2r410Qh12yy50OfOmGcdDRUSy6Seyyh0GO0gcqoYw7EHqxccYl+wc2jjw6x3K9q67BPDxNCevaYmnSOHXaHQaYz",
          "x-amz-request-id": "2PYKZMKXRDEZMPED",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "c08725edbd78570ed0f6e8587185e788",
            key:
              "gds/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442.xml.gz",
            sequencer: "006063795734E83629",
            size: 354,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131864137",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131864135",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:40.349Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"2PYKZMKXRDEZMPED","x-amz-id-2":"Q0LnW+cRS2r410Qh12yy50OfOmGcdDRUSy6Seyyh0GO0gcqoYw7EHqxccYl+wc2jjw6x3K9q67BPDxNCevaYmnSOHXaHQaYz"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442.xml.gz","size":354,"eTag":"c08725edbd78570ed0f6e8587185e788","sequencer":"006063795734E83629"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "5f69854c282b312b756d42e3b1c7b176",
        messageAttributes: {},
        messageId: "c605965d-0fc1-4913-a135-8313d96e1fc0",
        receiptHandle:
          "AQEBhwAZyXpEGE/S0emzhuIiwvOz0liRwSq6d0BmsJOlTXwffkCfprBibTuvPz6+PECy/aYWRyyHu+rIYd+SPmFpWIlxS0HvUN1K0qgjgCeU0u/chOkJ9qDNKssCqv6lCaAmxW5pdyXDkN+6Z3qhkydKjfIa2BdMqSyZpMrUBfQKQ0S3bWCPiwcPxzaHQlhOAB6XfaeILHhJ/dl8QgeKxa+1wNri1sFiouSOVVWsZ52abbLEftG9sVIkOMDlvIXC8uBUMv5Dk5UMKwaac3t2lLPpiqLjb4762JzXs2SpPv1cgbruIz8uNYkXiU1glhCougj+BobUUlurgBoXw40FhOimIVDhcb5TyGLjw4zPjEF8c/AUuY+qvEslnRdWZyfp/yW1DeLwx1M9b3obqZAGLuUIE6VYm1fJUSIAWasKoUCIRqo=",
      },
      ValidityEndDateTime: "2020-05-04T23:44:42.000000Z",
      ValidityStartDateTime: "2020-05-04T22:59:42.000000Z",
      id: "NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
      restaged: false,
      tags: ["ISL"],
    },
    objectid:
      "NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442.xml.gz",
      ],
      wasGeneratedBy: "task_id:61559393-df8c-4f9f-afcf-1ef57425b906",
    },
    starttime: "2020-05-04T22:59:42.000000Z",
    system_version: "1",
    temporal_span: 0,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NOE/2020/05/04/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/NOE/2020/05/04/NISAR_ANC_J_PR_NOE_20200504T145019_20200504T225942_20200504T234442",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:52.266880Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NRP/2018/06/02/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/NRP/2018/06/02/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
    ],
    creation_timestamp: "2021-03-30T19:18:43.244",
    dataset: "NRP",
    dataset_level: "NA",
    dataset_type: "NRP",
    endtime: "2018-06-02T17:49:42.000000Z",
    id: "NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
    images: [],
    ipath: "hysds::data/NRP",
    metadata: {
      CreationDateTime: "2019-09-01T14:50:15.000000Z",
      Fidelity: "NRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942.xml-20210330T191749.302604Z/output/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
      FileName:
        "NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942.xml",
      FileSize: 2481,
      GranuleName: "NISAR_ANC_L_PR_NRP_20180602125944_20180602174942",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942.xml",
      ],
      Instrument: "L",
      Lambda_trigger_time: "2021-03-30T19:17:49.070854Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:43.233755Z",
      ProductReceivedYear: 2021,
      ProductType: "NRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:45.307Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "l78cQ9iHBjB5kV+SUM3D0XMoAQjnIF44irdD4m9BlKmVkEGjPqWHqi95hxXAI7P9lSASAR5Mb8uAPxWSPzPq3418fgIdNTE6",
          "x-amz-request-id": "PNY4XSHHH755J5R8",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "a03bb011c679ed8576fa604f255b736a",
            key:
              "gds/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942.xml",
            sequencer: "006063795C46C9F5BD",
            size: 2481,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131868966",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131868949",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:45.307Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"PNY4XSHHH755J5R8","x-amz-id-2":"l78cQ9iHBjB5kV+SUM3D0XMoAQjnIF44irdD4m9BlKmVkEGjPqWHqi95hxXAI7P9lSASAR5Mb8uAPxWSPzPq3418fgIdNTE6"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942.xml","size":2481,"eTag":"a03bb011c679ed8576fa604f255b736a","sequencer":"006063795C46C9F5BD"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "be0ade2b1d4eb9fa4a2a06d26dbe718b",
        messageAttributes: {},
        messageId: "a442aaf5-3e2d-4b2f-90b9-1c8b32ecf4cb",
        receiptHandle:
          "AQEBRjDE6m22qnqUsloZvHLFOjL1Gt987K0bX26gsItuhdcPBzSkYN2YIoLgallBf8qOP+LLJQDwWMHkbYq6Z4kzcXnx5oaf8+xriMdCA0+kYsqfnYjECASvU9llScxZ8zz6XnKu27yW8B70t9y99ZsS+oCWSIfwG6dgmTwiuVGJID1st4C7v12oReEOTC8myRs6jqc93C5OrrXFf9FlPtunI6/6tkGs6HZDmrs6UQdOfWmRQbWlWeZuKJ+W0wzlc+UW5ytkjqH9oHHFnIMJuhhstarIykeSIqqYsATKIOlFh+QAnmzCECKim6SdksDNQUJGpuhx0TdqdZIHBtiA+W6ry5kY904LpeZr4/R5ucOoR7ypTpeY+is9iR3f/ID8AXr3Ovs5xaMEkLefiC8V1KlN+nIXAGkiYhK+FDir4zLCFEU=",
      },
      ValidityEndDateTime: "2018-06-02T17:49:42.000000Z",
      ValidityStartDateTime: "2018-06-02T12:59:44.000000Z",
      id: "NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942.xml",
      ],
      wasGeneratedBy: "task_id:6715d0c9-e358-4264-9942-74a28286f4f2",
    },
    starttime: "2018-06-02T12:59:44.000000Z",
    system_version: "1",
    temporal_span: 0,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NRP/2018/06/02/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/NRP/2018/06/02/NISAR_ANC_L_PR_NRP_20190901145015_20180602125944_20180602174942",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:51.933870Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NRP/2018/06/05/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/NRP/2018/06/05/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
    ],
    creation_timestamp: "2021-03-30T19:18:42.577",
    dataset: "NRP",
    dataset_level: "NA",
    dataset_type: "NRP",
    endtime: "2018-06-05T05:11:42.000000Z",
    id: "NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
    images: [],
    ipath: "hysds::data/NRP",
    metadata: {
      CreationDateTime: "2019-09-03T14:50:17.000000Z",
      Fidelity: "NRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142.xml-20210330T191748.148240Z/output/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
      FileName:
        "NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142.xml",
      FileSize: 4368,
      GranuleName: "NISAR_ANC_J_PR_NRP_20180605005946_20180605051142",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142.xml",
      ],
      Instrument: "J",
      Lambda_trigger_time: "2021-03-30T19:17:47.834066Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:42.567237Z",
      ProductReceivedYear: 2021,
      ProductType: "NRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:43.542Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "Cx/sAwLLRdppZOe8KY6+/zFh8J3NUDXmLrU8eJxekCHDWMbsJo04yDxFxpM81YCgOTPQW0GpX/0sIzVNBHdroCimwb5GX+/Z",
          "x-amz-request-id": "TYEW3ZN7QXMC7QBA",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "156c052d5e991da2264d2bac15b4c023",
            key:
              "gds/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142.xml",
            sequencer: "006063795A73CF810D",
            size: 4368,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131867746",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131867745",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:43.542Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"TYEW3ZN7QXMC7QBA","x-amz-id-2":"Cx/sAwLLRdppZOe8KY6+/zFh8J3NUDXmLrU8eJxekCHDWMbsJo04yDxFxpM81YCgOTPQW0GpX/0sIzVNBHdroCimwb5GX+/Z"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142.xml","size":4368,"eTag":"156c052d5e991da2264d2bac15b4c023","sequencer":"006063795A73CF810D"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "45478b9f39ba71fdf6cf058f6dd5f9b8",
        messageAttributes: {},
        messageId: "638d4ad1-b87a-40bf-97d1-f1e990802f8c",
        receiptHandle:
          "AQEBAankC2opvKXJZkGgubdEVMQF690zOhVEJFbuHGOOtMoiypEYVggC7UfELrb4BvoHALo0HFzmlyydDGPKYUoqPs3rZML5GMnd4saQTVYDSiboY0kFIgeV/6DxvNRlVW8TgdZBzTkvvZOx9FrGAEF1mHX/mz0c5versj6vGjEYuGffTH9klga9PgTvaAK37FK2Gah5Dk7gnXz/LVUwU8oAHOXA6Pbky9zdE72riamVTX2TwboSTSR2Yu6XBqGsGtHtnmbGW5O4fzh8ViF04LsEHB1CtQQIbCe9bZukDd87YMyjyf//0sN0SC+bot3Ilw2+v3yaw070bRgX6TPHmHzviqZpIhB6rJhI6Qzy+o6p1AQuoXRP1AeDDsK66dUbKw3+SILj1dGpudNarfRDBgp4t7ejklJ3P42G1FOcRxLVoQ0=",
      },
      ValidityEndDateTime: "2018-06-05T05:11:42.000000Z",
      ValidityStartDateTime: "2018-06-05T00:59:46.000000Z",
      id: "NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142.xml",
      ],
      wasGeneratedBy: "task_id:22a534d4-bc0b-405d-a797-1a9f09cc8fbf",
    },
    starttime: "2018-06-05T00:59:46.000000Z",
    system_version: "1",
    temporal_span: 0,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NRP/2018/06/05/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/NRP/2018/06/05/NISAR_ANC_J_PR_NRP_20190903145017_20180605005946_20180605051142",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:19:05.237687Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/NRP/2018/06/07/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/NRP/2018/06/07/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
    ],
    creation_timestamp: "2021-03-30T19:18:55.774",
    dataset: "NRP",
    dataset_level: "NA",
    dataset_type: "NRP",
    endtime: "2018-06-07T15:19:42.000000Z",
    id: "NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
    images: [],
    ipath: "hysds::data/NRP",
    metadata: {
      CreationDateTime: "2019-09-02T14:50:16.000000Z",
      Fidelity: "NRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942.xml-20210330T191751.881602Z/output/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
      FileName:
        "NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942.xml",
      FileSize: 2481,
      GranuleName: "NISAR_ANC_S_PR_NRP_20180607105945_20180607151942",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942.xml",
      ],
      Instrument: "S",
      Lambda_trigger_time: "2021-03-30T19:17:51.631721Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:55.765310Z",
      ProductReceivedYear: 2021,
      ProductType: "NRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:47.192Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "HDgf+qc3unbopsQhX2Qf1PAmj6UEXfcDOe+sqlIIqy+vms0o5voAbQ53Vrf965Jm4nfEs8oI67k7LjBlyB1BCAqk2UHxjd4F",
          "x-amz-request-id": "ARRRZ76NTD5B70EZ",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "9cc8be705525c63b3f5ee29589eeb71f",
            key:
              "gds/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942.xml",
            sequencer: "006063795E2921E38C",
            size: 2481,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131871551",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131871550",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:47.192Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"ARRRZ76NTD5B70EZ","x-amz-id-2":"HDgf+qc3unbopsQhX2Qf1PAmj6UEXfcDOe+sqlIIqy+vms0o5voAbQ53Vrf965Jm4nfEs8oI67k7LjBlyB1BCAqk2UHxjd4F"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942.xml","size":2481,"eTag":"9cc8be705525c63b3f5ee29589eeb71f","sequencer":"006063795E2921E38C"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "0a0e38851e4441fae3196e445259ed51",
        messageAttributes: {},
        messageId: "54e88762-463f-4808-875c-c4b20c5b2f17",
        receiptHandle:
          "AQEB8liXwko5ul+IDFEWmvGAJbZtCa7Xuu+nCze0rxvz3ZF5RuFLxPKu+BSLOhHb9dvYzYgCo6j5GYFDMQnzYqzK57BMPXd0zD130RaoMhm7W127BrWHbaP7LGlh+lkHAXF3tZeTF2sjbveWypkQT8ldm4ufLcHgEEkCwpuN/AWIFQUGaDhtRF4fAu0NKEmh9b6dh2m2XwKPppAJ/ntT7mRJf4pSfYW7J7R2oKDtbr7Kq1U88PyxvGnhwev+Vv3kfT5jtGyX2e1opBYmHD8jlLeY/FEBTUaE1DfXAX+fT+hr0diENs7lk8H0C/Ban4XLBMdzMGZsK/IrrtQxuFbeMx5qksBmYEqYJXM+gLr4OMOhSTYJfwmspgmX2nSTbkJNhhne546QHFVxC56TvVdn4BBRjLmSKKOc/Hzeh5YPphQODLg=",
      },
      ValidityEndDateTime: "2018-06-07T15:19:42.000000Z",
      ValidityStartDateTime: "2018-06-07T10:59:45.000000Z",
      id: "NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942.xml",
      ],
      wasGeneratedBy: "task_id:643e40cd-5aa4-4688-99cf-6d2a95133627",
    },
    starttime: "2018-06-07T10:59:45.000000Z",
    system_version: "1",
    temporal_span: 0,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/NRP/2018/06/07/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/NRP/2018/06/07/NISAR_ANC_S_PR_NRP_20190902145016_20180607105945_20180607151942",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:36.277993Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/POE/2022/01/08/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/POE/2022/01/08/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
    ],
    creation_timestamp: "2021-03-30T19:18:28.248",
    dataset: "POE",
    dataset_level: "NA",
    dataset_type: "POE",
    endtime: "2022-01-08T22:59:42.000000Z",
    id: "NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
    images: [],
    ipath: "hysds::data/POE",
    metadata: {
      CreationDateTime: "2022-01-04T14:50:19.000000Z",
      Fidelity: "POE",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942.xml.gz-20210330T191745.199012Z/output/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
      FileName:
        "NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942.xml.gz",
      FileSize: 354,
      GranuleName: "NISAR_ANC_J_PR_POE_20220108T005942_20220108T225942",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942.xml.gz",
      ],
      Instrument: "J",
      Lambda_trigger_time: "2021-03-30T19:17:44.950348Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:28.236179Z",
      ProductReceivedYear: 2021,
      ProductType: "POE",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:40.925Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "3GWRzg6u63Htdho8nzSCCiViiRv6EgIVpl2ogdCkFheMcA58yvgsPQJctOtr8kjT+BZSt/XY4oU7bHcUFDDc2pxlQSdpRCeZ",
          "x-amz-request-id": "2PYMKP90R99Z6CSN",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "3e7c9371d9ddfd8fffefd7426f3d8793",
            key:
              "gds/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942.xml.gz",
            sequencer: "0060637957CF1F9C87",
            size: 354,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131864845",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131864811",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:40.925Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"2PYMKP90R99Z6CSN","x-amz-id-2":"3GWRzg6u63Htdho8nzSCCiViiRv6EgIVpl2ogdCkFheMcA58yvgsPQJctOtr8kjT+BZSt/XY4oU7bHcUFDDc2pxlQSdpRCeZ"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942.xml.gz","size":354,"eTag":"3e7c9371d9ddfd8fffefd7426f3d8793","sequencer":"0060637957CF1F9C87"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "8831fb567bb2871bf4533bfb4ce8cf11",
        messageAttributes: {},
        messageId: "16a0f1e8-8fc2-41a6-bf63-8fb7ccfb397d",
        receiptHandle:
          "AQEBnovelHFgDTcRyucbDfG23RuXJZHpV9adMuwUVq3zuSADIaevc9d30A5Ml7Ys+qsm1wFvZMbe63so1Pd9I1JqEJaMY/Q1Td90j5/AGun7qfj2urIDLs3qPrIheIQLsPKQfwbiOeurT4hMMBSxNc8h8f3BZjTqwVaBYyAurr7dRbE0lwHtL+Wvj6DtXOe0fE1J/nSYa6moxcoJvD0rN7QNcAJIZ2xpQlOVrdgtHE5PjtvS+J0+zrrK97A+g3ZrBN3jQBXqSmQ4TD+3E2qjuBnqT0/gQodWtOio3UcA6FVAw1v5nVZcCc1vcWMztFjjaApevpNXcTKTw81bIMN5oMcxzp8dnrcEf2NaShcfcyd9dIwoTTfvyeJ7d/IlIqjr7yAF+75UHj3ItIjsq7UKjyrfuLeuIj1duhiu5AC0dAXZsOE=",
      },
      ValidityEndDateTime: "2022-01-08T22:59:42.000000Z",
      ValidityStartDateTime: "2022-01-08T00:59:42.000000Z",
      id: "NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
      restaged: false,
      tags: ["ISL"],
    },
    objectid:
      "NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942.xml.gz",
      ],
      wasGeneratedBy: "task_id:9fa96d1d-ca0c-48a7-912e-1ce98692f65e",
    },
    starttime: "2022-01-08T00:59:42.000000Z",
    system_version: "1",
    temporal_span: 1,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/POE/2022/01/08/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/POE/2022/01/08/NISAR_ANC_J_PR_POE_20220104T145019_20220108T005942_20220108T225942",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:19:08.194127Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/PRP/2018/06/07/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/PRP/2018/06/07/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
    ],
    creation_timestamp: "2021-03-30T19:18:58.677",
    dataset: "PRP",
    dataset_level: "NA",
    dataset_type: "PRP",
    endtime: "2018-06-09T00:59:55.000000Z",
    id: "NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
    images: [],
    ipath: "hysds::data/PRP",
    metadata: {
      CreationDateTime: "2019-09-04T14:52:19.000000Z",
      Fidelity: "PRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955.xml-20210330T191751.939123Z/output/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
      FileName:
        "NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955.xml",
      FileSize: 2481,
      GranuleName: "NISAR_ANC_S_PR_PRP_20180607005948_20180609005955",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955.xml",
      ],
      Instrument: "S",
      Lambda_trigger_time: "2021-03-30T19:17:51.678026Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:58.667159Z",
      ProductReceivedYear: 2021,
      ProductType: "PRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:47.815Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "Q3W1wAiJO5LjF4EuQ6RpSUQU6Ri50c4Fx+oOy0dVx7irE8PodHYioF1NxPnsP7WckJZsyUnZeMdglHVBpW2XUNjA13V0oui0",
          "x-amz-request-id": "ARRGKKPKYEMVSRQS",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "7963b874ac21667ff6459ca12ef1ba9e",
            key:
              "gds/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955.xml",
            sequencer: "006063795ECB7CF6BC",
            size: 2481,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131871597",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131871596",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:47.815Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"ARRGKKPKYEMVSRQS","x-amz-id-2":"Q3W1wAiJO5LjF4EuQ6RpSUQU6Ri50c4Fx+oOy0dVx7irE8PodHYioF1NxPnsP7WckJZsyUnZeMdglHVBpW2XUNjA13V0oui0"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955.xml","size":2481,"eTag":"7963b874ac21667ff6459ca12ef1ba9e","sequencer":"006063795ECB7CF6BC"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "17828172b2d03c93ed0efbdfcceaaede",
        messageAttributes: {},
        messageId: "fa60a8c3-16a9-4140-9638-394a6608fb1b",
        receiptHandle:
          "AQEBUEC1V8/eDss02mOqrpNid2q/5KM6+cRLcvwCa+Xp45E7qnhycbPrd2tlid4+jcEhaASYrej3D3Hp3mldEeHxOf261J3V5VwC2/vL4uMlAOzHphcBS7uR9b8Wscl6OQXz4lAz5wF+BgzLg34mfpzjj3AZTRlTLSGM7jlCag1PhBCp7tgqnD21yCSHLTn7HRIcFn5o9zlb0KsCq4gG+1iuI6+yvBDkk2NqflN1FDC2kSWwHFUyTJPwHdwD2qOhDI4fyh4FUyEYvbVszwCZQsyjDfQilQwZNMaRYo709QWVUTEavVKA03mPc9Of+c2gK8tcOvk5b5+s+WqIc1181ML3XzVBglBOw/K2n6wsj8tmggbtzG7RdA8nBZ+vgxnjrOo3KidIxz8iPfLLKBbZL80cz/T6ovZRG6J7yqlau5OqV1E=",
      },
      ValidityEndDateTime: "2018-06-09T00:59:55.000000Z",
      ValidityStartDateTime: "2018-06-07T00:59:48.000000Z",
      id: "NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955.xml",
      ],
      wasGeneratedBy: "task_id:841bd028-6730-452a-824e-bad2df8bad9e",
    },
    starttime: "2018-06-07T00:59:48.000000Z",
    system_version: "1",
    temporal_span: 2,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/PRP/2018/06/07/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/PRP/2018/06/07/NISAR_ANC_S_PR_PRP_20190904145219_20180607005948_20180609005955",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:19:01.147581Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/PRP/2018/06/03/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/PRP/2018/06/03/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
    ],
    creation_timestamp: "2021-03-30T19:18:52.246",
    dataset: "PRP",
    dataset_level: "NA",
    dataset_type: "PRP",
    endtime: "2018-06-05T00:59:42.000000Z",
    id: "NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
    images: [],
    ipath: "hysds::data/PRP",
    metadata: {
      CreationDateTime: "2019-09-04T14:50:19.000000Z",
      Fidelity: "PRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942.xml-20210330T191750.70070Z/output/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
      FileName:
        "NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942.xml",
      FileSize: 1891,
      GranuleName: "NISAR_ANC_L_PR_PRP_20180603225947_20180605005942",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942.xml",
      ],
      Instrument: "L",
      Lambda_trigger_time: "2021-03-30T19:17:49.771439Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:52.238466Z",
      ProductReceivedYear: 2021,
      ProductType: "PRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:45.853Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "4OudPAZKW0xJa5kLX9fKjV7itvwivXR36a1aDro6c5hZIzAl6ZzHK6ITz06cvLHZe+rjXYKl+vHK46cC//4kDeUD2tDME+mE",
          "x-amz-request-id": "PNY883H0Z609PKBS",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "94a998249a17ccd2983f65267bdbf48a",
            key:
              "gds/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942.xml",
            sequencer: "006063795CD357DCB5",
            size: 1891,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131869659",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131869658",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:45.853Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"PNY883H0Z609PKBS","x-amz-id-2":"4OudPAZKW0xJa5kLX9fKjV7itvwivXR36a1aDro6c5hZIzAl6ZzHK6ITz06cvLHZe+rjXYKl+vHK46cC//4kDeUD2tDME+mE"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942.xml","size":1891,"eTag":"94a998249a17ccd2983f65267bdbf48a","sequencer":"006063795CD357DCB5"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "c926c3d89bfe59df92fec96124cb25a7",
        messageAttributes: {},
        messageId: "4a5958fe-ccf4-46c0-904d-3c191abcbca7",
        receiptHandle:
          "AQEBnh0IjBpMfHFVExUfpFo8LxuJyw7UdoqAytmluc0y+I5y6v78+7dcMOdfPmvee5fwH9icSvoDqLto9Jd+6dZFdPDwtPVB+ut2RkAqaYl1wlOmxeXNfBmGrr7dd0VsOy6mL87VRwEhd4/xp4cQb+3SzJ1Qyfus+HdlCZQTuZDeOgolBsreTHMUZVeNf7pjLpf++17rfbDhGUebyfxlp56I5dIQM//xLtFAYSheBNIO10zda+7htRxM/jNW8/HtjDjSJELaY0ebX8tNh8r189fvjd3jr5LQIJ/mEJQsmxF7meG3nlVGk4cmfOAiOxKBQdyy3XRTbN2iOUP48XrYJqmgb/wAnX/i5360NMGJ/zJoDTGdGp3dAVZBQ33SJnLbQuYf87z55TW6JJKBLp9XF9RrUpvpg3iu1T5xalxeYhu9cyE=",
      },
      ValidityEndDateTime: "2018-06-05T00:59:42.000000Z",
      ValidityStartDateTime: "2018-06-03T22:59:47.000000Z",
      id: "NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942.xml",
      ],
      wasGeneratedBy: "task_id:f5447c69-693e-41dd-954b-71626e670231",
    },
    starttime: "2018-06-03T22:59:47.000000Z",
    system_version: "1",
    temporal_span: 1,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/PRP/2018/06/03/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/PRP/2018/06/03/NISAR_ANC_L_PR_PRP_20190904145019_20180603225947_20180605005942",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:53.881238Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/PRP/2018/06/05/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/PRP/2018/06/05/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
    ],
    creation_timestamp: "2021-03-30T19:18:44.310",
    dataset: "PRP",
    dataset_level: "NA",
    dataset_type: "PRP",
    endtime: "2018-06-07T00:58:23.000000Z",
    id: "NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
    images: [],
    ipath: "hysds::data/PRP",
    metadata: {
      CreationDateTime: "2019-09-04T14:55:29.000000Z",
      Fidelity: "PRP",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823.xml-20210330T191748.193680Z/output/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
      FileName:
        "NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823.xml",
      FileSize: 3186,
      GranuleName: "NISAR_ANC_J_PR_PRP_20180605005959_20180607005823",
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823.xml",
      ],
      Instrument: "J",
      Lambda_trigger_time: "2021-03-30T19:17:47.929714Z",
      ProcessingType: "PR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:44.298490Z",
      ProductReceivedYear: 2021,
      ProductType: "PRP",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:44.098Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "PVTvK5/zlprViBdqQZ9OOVB0vgeB4sNXFuLmm8JmEpjxfgsIjKzALpW+hb7t5vFlgT10n86N5A9EjDlU1u8dRs8gvYwK2OiS",
          "x-amz-request-id": "1WHM3NCRMP51GF06",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "2fc29cb668ee1ea859e6aad29c74200f",
            key:
              "gds/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823.xml",
            sequencer: "006063795B10F4B8E0",
            size: 3186,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131867821",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131867819",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:44.098Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"1WHM3NCRMP51GF06","x-amz-id-2":"PVTvK5/zlprViBdqQZ9OOVB0vgeB4sNXFuLmm8JmEpjxfgsIjKzALpW+hb7t5vFlgT10n86N5A9EjDlU1u8dRs8gvYwK2OiS"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823.xml","size":3186,"eTag":"2fc29cb668ee1ea859e6aad29c74200f","sequencer":"006063795B10F4B8E0"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "4e2ab4823dfdd89ee628148ce0d84071",
        messageAttributes: {},
        messageId: "fd876039-cabe-49c6-bfb5-326dcd93f5a6",
        receiptHandle:
          "AQEBj2kTpc+ueU8wWLmW2VpDUo3UWF0Sgh3NbQUXyS1G486T30ZXlOv+lsb+rRUcDNlXiCJoF1AdiHKjICDPXhJQHQmKzqpotM8nya0Lrf48RaxVJu1eopvPz7Xe89QfzL7xoznQMt/FzOhAMxPMwgUhw/IJiaizi9EfZKA3eq7c0/4iG2D/6PDtl01sCQ5g0aFzctivQV0IIlvcJr1GNz2egPw5iR2rLHmafzaM5BZMEM2kdtooKMoKks8CEOCDfgvhVy0slB2yTbJ8jiv5tEpqqXdxNALDqyEp7Gf4llF1aVjO0+LbEJ9Qy6x6q1GJBoubmjpcmx6+GsGosHlt9PChDcZ6ubC7W6u/Lnpfff2DpMbxvLlszymSPmFMlQB9Ygf4nhtuj9U+AQ+HY7yMFWEIlWkv4jc+sWh80jJeIJcfnGY=",
      },
      ValidityEndDateTime: "2018-06-07T00:58:23.000000Z",
      ValidityStartDateTime: "2018-06-05T00:59:59.000000Z",
      id: "NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823.xml",
      ],
      wasGeneratedBy: "task_id:db6b5af9-8ed7-44f8-9d54-e973fc546237",
    },
    starttime: "2018-06-05T00:59:59.000000Z",
    system_version: "1",
    temporal_span: 2,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/PRP/2018/06/05/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/PRP/2018/06/05/NISAR_ANC_J_PR_PRP_20190904145529_20180605005959_20180607005823",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:16.332040Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-06-0100_radar-observation-sequence_lset003_rcid197",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-06-0100_radar-observation-sequence_lset003_rcid197",
    ],
    creation_timestamp: "2021-03-30T19:18:07.536",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-06-0100_radar-observation-sequence_lset003_rcid197",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-06-0100_radar-observation-sequence_lset003_rcid197.xml-20210330T191739.258872Z/output/id_00-06-0100_radar-observation-sequence_lset003_rcid197",
      FileName: "id_00-06-0100_radar-observation-sequence_lset003_rcid197.xml",
      FileSize: 1920,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-06-0100_radar-observation-sequence_lset003_rcid197.xml",
      ],
      Kind: 6,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:39.017087Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:07.532353Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 197,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:34.713Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "6HCxYR4MfLgkDck43dzMv6sOSLzUVq6atrFcs9VZwX7OAvPRYJko2sw/RLvldXlOn0X1ZkeFD1ft33jcMyFV9IBeyye1ja4W",
          "x-amz-request-id": "MA95NYWKA521XYCY",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "4fd4d2544dfecd956c4a62f98ddc080b",
            key:
              "gds/id_00-06-0100_radar-observation-sequence_lset003_rcid197.xml",
            sequencer: "00606379517E24E3B7",
            size: 1920,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131858913",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131858912",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:34.713Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"MA95NYWKA521XYCY","x-amz-id-2":"6HCxYR4MfLgkDck43dzMv6sOSLzUVq6atrFcs9VZwX7OAvPRYJko2sw/RLvldXlOn0X1ZkeFD1ft33jcMyFV9IBeyye1ja4W"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-06-0100_radar-observation-sequence_lset003_rcid197.xml","size":1920,"eTag":"4fd4d2544dfecd956c4a62f98ddc080b","sequencer":"00606379517E24E3B7"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "8df01dfb0713d4026d73b489dac61bb6",
        messageAttributes: {},
        messageId: "6b16c70d-ba38-4210-b034-71e95279f52c",
        receiptHandle:
          "AQEBx4Uaa2BOoF2168jT0gGy1rGz4cmP4Nswn1IXZzSVgMnVUkAYOmhi7qh7lffjVOGe3ni+1FoTsr7ryoUORaa0zOM/dCK/9m9FlFoKyz8GOj3wr7oanPggV1+FCi4ilg8PtCPH2xqFE4EhLnpCzzZL8MlCCPmnWZJoVGi1vOEdbLZOOZapdpcBLhbssVRcI1WhyWDT3sQb0WXUO0eylXBE/lmflRd9oJgia7WE55DeKj+qZd2DZm9K3O4zCV+FS2uBNjm3I8l/ouxs9c7ZoqBvAsvOjmg38jgUldTdFoSS9rO3Ju+7WyMsbc9Kc5yEYt3IpsgbG613WDHpw/l2WLyT59oGc1uYoa/SU+kkN+TyXE5WdbDEqDxsHlV9m9dA0n86enV9shN7XiB3EtkVjZS0nDN0CFJMnZIXYOy4FH/TDDA=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-06-0100_radar-observation-sequence_lset003_rcid197",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-06-0100_radar-observation-sequence_lset003_rcid197",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-06-0100_radar-observation-sequence_lset003_rcid197.xml",
      ],
      wasGeneratedBy: "task_id:e295e4fc-42f8-4026-93c1-73b1b0623eb3",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-06-0100_radar-observation-sequence_lset003_rcid197",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-06-0100_radar-observation-sequence_lset003_rcid197",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:04.261190Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-03-0100_radar-observation-sequence_lset003_rcid194",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-03-0100_radar-observation-sequence_lset003_rcid194",
    ],
    creation_timestamp: "2021-03-30T19:17:54.660",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-03-0100_radar-observation-sequence_lset003_rcid194",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-03-0100_radar-observation-sequence_lset003_rcid194.xml-20210330T191737.3110Z/output/id_00-03-0100_radar-observation-sequence_lset003_rcid194",
      FileName: "id_00-03-0100_radar-observation-sequence_lset003_rcid194.xml",
      FileSize: 1920,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-03-0100_radar-observation-sequence_lset003_rcid194.xml",
      ],
      Kind: 3,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:36.719426Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:54.654404Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 194,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:32.847Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "dO1AGwvXmy5fGbCjB7fuY+jjWvb38Kn3mbmNBzDZSpIg64lGpjrslCw3HHYSntAfHHksH/PYorHjnKCnFJnDAbkRecQUEQ1+",
          "x-amz-request-id": "XPB0QY56TTDSRATN",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "b9fc4530f0618663104937c45236ad80",
            key:
              "gds/id_00-03-0100_radar-observation-sequence_lset003_rcid194.xml",
            sequencer: "006063794F9DFDF15C",
            size: 1920,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131856634",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131856631",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:32.847Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"XPB0QY56TTDSRATN","x-amz-id-2":"dO1AGwvXmy5fGbCjB7fuY+jjWvb38Kn3mbmNBzDZSpIg64lGpjrslCw3HHYSntAfHHksH/PYorHjnKCnFJnDAbkRecQUEQ1+"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-03-0100_radar-observation-sequence_lset003_rcid194.xml","size":1920,"eTag":"b9fc4530f0618663104937c45236ad80","sequencer":"006063794F9DFDF15C"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "57afd2399e2af74d836c3c45b1e72e75",
        messageAttributes: {},
        messageId: "93e567f7-3405-4b26-9aea-f799584647a0",
        receiptHandle:
          "AQEBe70oqrsHD7dOgY46FhbzINxGKKVfVKkndoxGvPWDPR529gCC7DSGC6HVu9SVDaO14YHp1N+UAAY2xJXEfZz94MW/1um4VoIgNK+N1au2SD+nEtXdTtSZtuMQYQTZNsXe5tSBsfAChFKP2NqJSjSCHuEADeDru+d771N4pcW71DaW3j7c0GA2SnTfgDNxMh94qKsJHlvC+hFt31lNZC+NhfHHiMB1rNqU/MH3UiXv8LUvdcttPJ205CkyX/6eLlHPM6ewuziAO5SN6u4e6wk7+FMQGlhq5Cg+uuGTCjDT9b0yAaYBafzJ2igVDntsY1nOBYFM6hnb2L6ykq4elfYNx+1JjZ2l6ST3bPvpSBaDduskcxQcYP6JQvJ3I20kPjLLT+3LLN+ck1IUuu+Kjt8/K06t1Hv+ST4e74+Sws4fHTE=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-03-0100_radar-observation-sequence_lset003_rcid194",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-03-0100_radar-observation-sequence_lset003_rcid194",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-03-0100_radar-observation-sequence_lset003_rcid194.xml",
      ],
      wasGeneratedBy: "task_id:96b0545f-7da4-4851-8b0b-69ccaefcc2ff",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-03-0100_radar-observation-sequence_lset003_rcid194",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-03-0100_radar-observation-sequence_lset003_rcid194",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:04.051522Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
    ],
    creation_timestamp: "2021-03-30T19:17:53.520",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-0f-0100_radar-observation-sequence_lset003_rcid206.xml-20210330T191735.628868Z/output/id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
      FileName: "id_00-0f-0100_radar-observation-sequence_lset003_rcid206.xml",
      FileSize: 1921,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0f-0100_radar-observation-sequence_lset003_rcid206.xml",
      ],
      Kind: 15,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:35.360008Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:53.514575Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 206,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:31.030Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "p3yFSOlfaEi9v+Y+HdwuuXOZ4IxgVepu/Oqhq2yDPywXtj9WtS7EoPWsT7OdvMSEBe/3Gw5l9ShXtaEeP+V439Be5WRpBqSW",
          "x-amz-request-id": "TD2YPZ6T2RW0DFNG",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e54d5b4796fdd8fe47b2a32709ee00cb",
            key:
              "gds/id_00-0f-0100_radar-observation-sequence_lset003_rcid206.xml",
            sequencer: "006063794DC683D85A",
            size: 1921,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131855287",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131855286",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:31.030Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"TD2YPZ6T2RW0DFNG","x-amz-id-2":"p3yFSOlfaEi9v+Y+HdwuuXOZ4IxgVepu/Oqhq2yDPywXtj9WtS7EoPWsT7OdvMSEBe/3Gw5l9ShXtaEeP+V439Be5WRpBqSW"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-0f-0100_radar-observation-sequence_lset003_rcid206.xml","size":1921,"eTag":"e54d5b4796fdd8fe47b2a32709ee00cb","sequencer":"006063794DC683D85A"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "000c5899e1d0feae77ab04b7d9301632",
        messageAttributes: {},
        messageId: "9b6cb1ec-dc19-479e-950a-a2947668ad79",
        receiptHandle:
          "AQEBgHr5P5lOOnaCUzcPQQIG+8RjF4Nn2GMQRFojVW7YUxaaOLgO5bGMknQnFepZT/gKBg6sGyh6TeHBo8E4Te5moHFlVl80H/oiIx+k6PVC2bE2mfYNRAgsVQc9wfziQ2hUWSk3TE3Jo4Wwr1DgXVCiHFCdEbDwMQKKf8hg8RCX1ZSAPEOOGxMVeX/WY2F1WE4q9IdReu730J2RXHZaYeaGVH+KkdBtRNWY6aopUIul50z6uSjaqByW6wwsHO7J6Op6suCtufuYJIWpBjLGo/zVcI9rFxjnHjHcL5z8Nr1vN6CPizoiloLla9X6ZBgFSb6RG7/5nknznaaEOFtKnrX5w7tFxMpddFlLh4SpK0R/ZFHjJ1VCkMfPJI8PHHmKHzipSQHCRVHkR5tiMZFmcDK3rOvpUW9aUenPYjoZDqqQsSc=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0f-0100_radar-observation-sequence_lset003_rcid206.xml",
      ],
      wasGeneratedBy: "task_id:69c700c1-4812-48ac-a50c-03611dd20958",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-0f-0100_radar-observation-sequence_lset003_rcid206",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:04.428993Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
    ],
    creation_timestamp: "2021-03-30T19:17:55.131",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-0e-0100_radar-observation-sequence_lset003_rcid205.xml-20210330T191737.391244Z/output/id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
      FileName: "id_00-0e-0100_radar-observation-sequence_lset003_rcid205.xml",
      FileSize: 1921,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0e-0100_radar-observation-sequence_lset003_rcid205.xml",
      ],
      Kind: 14,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:37.094099Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:55.126200Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 205,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:30.457Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "1lQnBANxlcAj13qUXYDHLKC/x/v+pPmFVdJ/btrsafQihReIbCU1vhnfaOI5ZxXIJO3h7HyQyT9vNY0Hus5yc4yhkwEOX3xg",
          "x-amz-request-id": "TD2TDXG7GNSWKWJK",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "1850b326534f0b9c20c687b20017269e",
            key:
              "gds/id_00-0e-0100_radar-observation-sequence_lset003_rcid205.xml",
            sequencer: "006063794D2EE51016",
            size: 1921,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131853953",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131853946",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:30.457Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"TD2TDXG7GNSWKWJK","x-amz-id-2":"1lQnBANxlcAj13qUXYDHLKC/x/v+pPmFVdJ/btrsafQihReIbCU1vhnfaOI5ZxXIJO3h7HyQyT9vNY0Hus5yc4yhkwEOX3xg"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-0e-0100_radar-observation-sequence_lset003_rcid205.xml","size":1921,"eTag":"1850b326534f0b9c20c687b20017269e","sequencer":"006063794D2EE51016"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "471b658c2627ef49150ac95f942a9e6a",
        messageAttributes: {},
        messageId: "dc2c5869-21e9-40d9-9b6f-792e688588ae",
        receiptHandle:
          "AQEBATtLLIOk+naxnD+gEbzw+bQIbQogtJ1DUQozjGz7IAjxWNqk1+I1GoKopYuLMhCnEts8Mb8iwmerEhSqXOXXpY7JbjkrUqNpkkgTO6AljmIP+LMnGXWfNRhSNEu3BaZHKx99md2YuaQqhj+f5J+R4nxSk/kcmp9fmiDya9tHhH0O9bEC0XzuhroM2ipMXdq+mojMVFnuq84d+3ouftar+Kx2aP5nmPcUW4wafK/4JWEEU2eRPkB7VcNZG2KUVwXqCx80jc8WU5/6EJyF0Sk9SS4gts89uHcUNjmGg5YZO8GDl8U5leJqu/lbbeV9ZpLsQZKbICd7VQo56PbMKfCQRZsfKg0fzpKQl+aI31i5MQMIoMj5HgNGPTt+RMevOg5Q/Vkeiyl2Jf+HvBw4eJzJSKKx44AuWlg3iQKiUJUtsBw=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0e-0100_radar-observation-sequence_lset003_rcid205.xml",
      ],
      wasGeneratedBy: "task_id:02363815-e800-4dc0-a096-6299898ac4f2",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-0e-0100_radar-observation-sequence_lset003_rcid205",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:20.684535Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-07-0100_radar-observation-sequence_lset003_rcid198",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-07-0100_radar-observation-sequence_lset003_rcid198",
    ],
    creation_timestamp: "2021-03-30T19:18:10.750",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-07-0100_radar-observation-sequence_lset003_rcid198",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-07-0100_radar-observation-sequence_lset003_rcid198.xml-20210330T191739.302252Z/output/id_00-07-0100_radar-observation-sequence_lset003_rcid198",
      FileName: "id_00-07-0100_radar-observation-sequence_lset003_rcid198.xml",
      FileSize: 1920,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-07-0100_radar-observation-sequence_lset003_rcid198.xml",
      ],
      Kind: 7,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:39.034089Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:10.745047Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 198,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:35.310Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "Frvoc8I6T887jDE59MAzwXy/puS5f4SarzHmV4QxPErMSexW81F3h/bP4L3cTBoj9ACGH3RKAYaREMIXleZVWikW0PD+lxKy",
          "x-amz-request-id": "B579BX7CQ5YV0KDX",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "f97644cf6bc8a53db377b09b84dd3449",
            key:
              "gds/id_00-07-0100_radar-observation-sequence_lset003_rcid198.xml",
            sequencer: "00606379521FC6C24E",
            size: 1920,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131858990",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131858963",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:35.310Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"B579BX7CQ5YV0KDX","x-amz-id-2":"Frvoc8I6T887jDE59MAzwXy/puS5f4SarzHmV4QxPErMSexW81F3h/bP4L3cTBoj9ACGH3RKAYaREMIXleZVWikW0PD+lxKy"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-07-0100_radar-observation-sequence_lset003_rcid198.xml","size":1920,"eTag":"f97644cf6bc8a53db377b09b84dd3449","sequencer":"00606379521FC6C24E"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "499971c9e919dbf439709ea01cb20980",
        messageAttributes: {},
        messageId: "804e4093-d6a8-4354-b972-6f7e9320fdeb",
        receiptHandle:
          "AQEBvp0k+GewM7iFQnwot8Uu04kmiDWwW+38qqyFMnD1B/9Q2si5uKuSTqNI5bE/UuZlG1WahewYrPppm/3RQvoSXEDUwHi19SInEhjTlQmoM1PtUUUHEVyNoV56r8lPdIsesv8EPmJGWcEhH7aNZgHh0q2pFuUxd/GZI2eWR6oh8QMbz+WAHNMQ5wMLwjJyMbMaVk8MaOaeWp3aU/icZgc0Is/hWCNJJla0wIvRBf9eIvt6z8Kbm34o6oUCQQHXnHB5YSeBFx7laDCardE3tMN3roMKW91l+iKkxtNb48o2sWQrSzS1mzkaBI5RimhnHX8SRyVl+nQ0eVE5ELwE2uooXdfC7A7hFERfTd6bc6XeHakzZLpKRv7xQW+Z+m4CixOGkbC1P6/nzXzNmFpJB8nJF51wij/Ao9yITSDJwvA3V0w=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-07-0100_radar-observation-sequence_lset003_rcid198",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-07-0100_radar-observation-sequence_lset003_rcid198",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-07-0100_radar-observation-sequence_lset003_rcid198.xml",
      ],
      wasGeneratedBy: "task_id:722396b6-a384-4b6c-a708-39209c1a7291",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-07-0100_radar-observation-sequence_lset003_rcid198",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-07-0100_radar-observation-sequence_lset003_rcid198",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:33.066054Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-13-0100_radar-observation-sequence_lset003_rcid210",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-13-0100_radar-observation-sequence_lset003_rcid210",
    ],
    creation_timestamp: "2021-03-30T19:18:23.597",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-13-0100_radar-observation-sequence_lset003_rcid210",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-13-0100_radar-observation-sequence_lset003_rcid210.xml-20210330T191742.753962Z/output/id_00-13-0100_radar-observation-sequence_lset003_rcid210",
      FileName: "id_00-13-0100_radar-observation-sequence_lset003_rcid210.xml",
      FileSize: 11320,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-13-0100_radar-observation-sequence_lset003_rcid210.xml",
      ],
      Kind: 19,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:42.498764Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:23.592493Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 210,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:38.465Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "3R914kbQOvJFBzdBewUAXa0zV5wFjNtleld7nXber1amahzWI3PA8YX6eCoS4wntILw+e6GWmdXTxeJBjvCOSrILPD6LVL/Z",
          "x-amz-request-id": "F5JZP3J8VAV04ZT5",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "1ea45940709d8740eeaac15464b8ff39",
            key:
              "gds/id_00-13-0100_radar-observation-sequence_lset003_rcid210.xml",
            sequencer: "00606379553B465B2E",
            size: 11320,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131862386",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131862385",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:38.465Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"F5JZP3J8VAV04ZT5","x-amz-id-2":"3R914kbQOvJFBzdBewUAXa0zV5wFjNtleld7nXber1amahzWI3PA8YX6eCoS4wntILw+e6GWmdXTxeJBjvCOSrILPD6LVL/Z"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-13-0100_radar-observation-sequence_lset003_rcid210.xml","size":11320,"eTag":"1ea45940709d8740eeaac15464b8ff39","sequencer":"00606379553B465B2E"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "35aa5c13cb641d3ce700a45fdb243d2b",
        messageAttributes: {},
        messageId: "c727ee96-9071-42b0-97fd-af2155d5fb16",
        receiptHandle:
          "AQEBk0DpUt9BVeWrg8NqPfZRV63+SbjJWWaA81O1EfD1gyU2pAf2PueqkF7K7BujQKVrnxmMcgbkkM4ErJVGtPmR3d2khbBC6Nnp8x9UxrGDoDDfKAX3ShB65N1XtX3R2sqDyZzwdYKkMjTkDLbM5jH6sMZc+jjBS1vhZqSx5ojV2vCxsu74HYae777PmGuXFpoNfQmoI0ntQRMfRtWs/ObYIuA2HUBLfjbgFEVYSDTx7dDNn+8CUCzXk8gK1eoksEs/L9sZruozFoAz1yJSZxhsEbEfOw0I3dsLzegbwM3mAJMh1GUi84cYsM1v99Y7lInqXGsrRjjw0tymDrVF3jNP+B1+r1ejM/QNHJ//TtPBC0WDx5Uf+hmAnYb2cM6NuwAYHVkld06SXU9AYVONbCBQTcjglhqSlLfbh0hZtJLJeOs=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-13-0100_radar-observation-sequence_lset003_rcid210",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-13-0100_radar-observation-sequence_lset003_rcid210",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-13-0100_radar-observation-sequence_lset003_rcid210.xml",
      ],
      wasGeneratedBy: "task_id:0c6f4faf-a620-4614-8d61-06f4565642f5",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-13-0100_radar-observation-sequence_lset003_rcid210",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-13-0100_radar-observation-sequence_lset003_rcid210",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:21.227560Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
    ],
    creation_timestamp: "2021-03-30T19:18:11.449",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-0c-0100_radar-observation-sequence_lset003_rcid203.xml-20210330T191739.616159Z/output/id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
      FileName: "id_00-0c-0100_radar-observation-sequence_lset003_rcid203.xml",
      FileSize: 1921,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0c-0100_radar-observation-sequence_lset003_rcid203.xml",
      ],
      Kind: 12,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:39.271532Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:11.443389Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 203,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:29.313Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "p8a9QnNJhdWstc68EDZIddbWU+iiGWn0Apwzh8gBa54SMcFK8pn7eAuWVHJUpCBVHk0FUzPITGDdfBk1qxQrVVOcUEgC9ISk",
          "x-amz-request-id": "PJ4EX8VBNHTD7282",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "dc88d577f0d631e7692c5e49aa51414d",
            key:
              "gds/id_00-0c-0100_radar-observation-sequence_lset003_rcid203.xml",
            sequencer: "006063794C08F6FBC6",
            size: 1921,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131853421",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131853420",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:29.313Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"PJ4EX8VBNHTD7282","x-amz-id-2":"p8a9QnNJhdWstc68EDZIddbWU+iiGWn0Apwzh8gBa54SMcFK8pn7eAuWVHJUpCBVHk0FUzPITGDdfBk1qxQrVVOcUEgC9ISk"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-0c-0100_radar-observation-sequence_lset003_rcid203.xml","size":1921,"eTag":"dc88d577f0d631e7692c5e49aa51414d","sequencer":"006063794C08F6FBC6"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "5ded749a725d8103fd43e65ec8879239",
        messageAttributes: {},
        messageId: "b9c61819-fd96-41c7-a5dc-f2f3102d8863",
        receiptHandle:
          "AQEBSsw+m68Rl1By05i2Jlc37W2VFJfwLj6bSkbqJj5HsjDN41glGcHi26qnr+c95/TdMfcoORozIyMOyVKzXn5qaI4mobB9kPLcHS321+e57HJthnm4LbjibyLgR6fQ82YYfc8lER+MybXPxp16AxrDtKCZLLw9oiOARP7C0eXj9Pxv0WNWKFlQPxJYFaH3MlIcXAvneEeOAT05AtE/EMpWva/G5Xhd67x3ipBI/5N+5XQGun0TJ3U9X7+3OSJk1azABF1q3qVCeX/mMa/N5mnxwggXkByUid1olV7JanvyJTST7I0vifAG7uXBekyP8efoFiCXBND/BfiFCYTi9fZ5kRSy2iv271T5RuPNgbSdsNnT7wyInftXC6JSG9jXTRNLMnD13AONcBPgBzV4RMIgekOElvqMDWsEnv872LfuE7A=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0c-0100_radar-observation-sequence_lset003_rcid203.xml",
      ],
      wasGeneratedBy: "task_id:b34a53c0-51c5-4e73-9c9d-81d3b1b425ee",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-0c-0100_radar-observation-sequence_lset003_rcid203",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:00.687309Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-01-0100_radar-observation-sequence_lset003_rcid192",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-01-0100_radar-observation-sequence_lset003_rcid192",
    ],
    creation_timestamp: "2021-03-30T19:17:50.334",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-01-0100_radar-observation-sequence_lset003_rcid192",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-01-0100_radar-observation-sequence_lset003_rcid192.xml-20210330T191735.634236Z/output/id_00-01-0100_radar-observation-sequence_lset003_rcid192",
      FileName: "id_00-01-0100_radar-observation-sequence_lset003_rcid192.xml",
      FileSize: 1920,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-01-0100_radar-observation-sequence_lset003_rcid192.xml",
      ],
      Kind: 1,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:35.393015Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:50.329319Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 192,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:31.627Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "E9qFfegFDKCH0SB/X/SfHzrcXSUhr2QxP35BXO/Ya4nm/7Q45P067zOkN/NhdTCgStB+X7o7rU/PRNq2kM3hIbe2khrcY9ef",
          "x-amz-request-id": "8PZY42TX734QD72T",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "e0a90889dc2c032267f11a3f7efb4ceb",
            key:
              "gds/id_00-01-0100_radar-observation-sequence_lset003_rcid192.xml",
            sequencer: "006063794E5DD003F8",
            size: 1920,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131855264",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131855262",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:31.627Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"8PZY42TX734QD72T","x-amz-id-2":"E9qFfegFDKCH0SB/X/SfHzrcXSUhr2QxP35BXO/Ya4nm/7Q45P067zOkN/NhdTCgStB+X7o7rU/PRNq2kM3hIbe2khrcY9ef"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-01-0100_radar-observation-sequence_lset003_rcid192.xml","size":1920,"eTag":"e0a90889dc2c032267f11a3f7efb4ceb","sequencer":"006063794E5DD003F8"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "35efd47c397718ca25f248a63ce5d570",
        messageAttributes: {},
        messageId: "7b65ed57-8da1-4d4b-9f06-fc56c39cbfdb",
        receiptHandle:
          "AQEB5eVzMNWNWat2u7+gO3tI0onUnq/zXyHPVjLApUqEzZuJR8d+Tc6Wp2ZxAYwy/14cHw2hzzGDqcGmgykkWPt+zMoHd4IdmpmVSubvej/RaQO0mINSHr8R6aLDmLZYjOHhBepIxnDaptuKMS2UhaBXxAwaZNoNxh90gvpIjuwyCA/uFSTgypfczmjRoo3axMoTy8QHlTFUGMd9nBBIpoAxjO1du5AC4pv+PFweejEd06dudtfma1xSWZI7FbKHGMiTcnQLRwgTdIuyUOlgtJdZPamWIVFzmkb/9XZ+8yyko0LCbT8V0jti8CmKbyJ1EfNWsQL8UQAvxn7fGnouePoYm0eA6lEiMuxxwE2C6u+MRHWczEel1q301JCNWDcECbI/vdTeHskhT1ZNokvMmRi1YXW87ijA4Ol9BJqyvV8NADU=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-01-0100_radar-observation-sequence_lset003_rcid192",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-01-0100_radar-observation-sequence_lset003_rcid192",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-01-0100_radar-observation-sequence_lset003_rcid192.xml",
      ],
      wasGeneratedBy: "task_id:4c42958d-ccb5-4041-b18b-d7fc9ee46e39",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-01-0100_radar-observation-sequence_lset003_rcid192",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-01-0100_radar-observation-sequence_lset003_rcid192",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:17:48.445513Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
    ],
    creation_timestamp: "2021-03-30T19:17:38.796",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-0a-0100_radar-observation-sequence_lset003_rcid201.xml-20210330T191731.852194Z/output/id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
      FileName: "id_00-0a-0100_radar-observation-sequence_lset003_rcid201.xml",
      FileSize: 1922,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0a-0100_radar-observation-sequence_lset003_rcid201.xml",
      ],
      Kind: 10,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:31.593611Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:38.790404Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 201,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:27.998Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "p+yqNw3AYN1ERaEDx0ssI0828YLy/U16pK3j3UPhztO2M68HoEKAmaxi9huzQvn22mtEC1+7AYiG6UwVsVMrwooBcAfRyMsg",
          "x-amz-request-id": "6QKF2Z6FCHVSGD74",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "3db3744c06be3d06f0d92b85082224cc",
            key:
              "gds/id_00-0a-0100_radar-observation-sequence_lset003_rcid201.xml",
            sequencer: "006063794AAD70AA43",
            size: 1922,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131851497",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131851490",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:27.998Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"6QKF2Z6FCHVSGD74","x-amz-id-2":"p+yqNw3AYN1ERaEDx0ssI0828YLy/U16pK3j3UPhztO2M68HoEKAmaxi9huzQvn22mtEC1+7AYiG6UwVsVMrwooBcAfRyMsg"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-0a-0100_radar-observation-sequence_lset003_rcid201.xml","size":1922,"eTag":"3db3744c06be3d06f0d92b85082224cc","sequencer":"006063794AAD70AA43"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "bf0034bd68edfe56ac50e6f72ad54996",
        messageAttributes: {},
        messageId: "12cb73b0-6bcf-4c40-9a5d-7406ef84d7a6",
        receiptHandle:
          "AQEBjIqAWth9jDeUNSL2hnpZulBd9FNZOQPyXUisKjraenKtABfHIR7YQl+DLgBiuG7/06qdI9gGuv0kzXoQg3zhiHXEcIr1XvaFXtMTH5JiJbQkKbD2mKtao0oosYIjWmGJYInKXs8Mz8KsRCJ0F1Gn1xxGKsFBjyJYQ6SPvC+YYrs3tYpLWPrxCs0mjnNC1mjfI5GxY0ACUuJyNJHUHxP0xXYzCbE/1Ha6T5IxaBw2rQ7HDzfL9WEtV3xCprVtS38gJcaQedO9J4i7+8xhaFWjz9dojkbBQbdZWNTOECjoH8gQa4eIL1xHh7aZkvWSsCTlPnfmxmXdK4C78uk1V2Vca6Gvd7HK7THLuxajzfZxTxHXgKk8srIx/i9OT/JP9hN1Vy9i4Oh73GrN2f1UK9Jn3V+qIA7slSqANACwpLqi8A0=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0a-0100_radar-observation-sequence_lset003_rcid201.xml",
      ],
      wasGeneratedBy: "task_id:3d3bdc3d-a228-4068-87a7-c275e4692d82",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-0a-0100_radar-observation-sequence_lset003_rcid201",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:17:48.762422Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
    ],
    creation_timestamp: "2021-03-30T19:17:39.153",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-0b-0100_radar-observation-sequence_lset003_rcid202.xml-20210330T191732.947013Z/output/id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
      FileName: "id_00-0b-0100_radar-observation-sequence_lset003_rcid202.xml",
      FileSize: 1922,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0b-0100_radar-observation-sequence_lset003_rcid202.xml",
      ],
      Kind: 11,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:32.692764Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:39.147699Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 202,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:28.722Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "XqpBGfULnBu0W9r2lBcTNr/TPyjWFVT+sZVTisQ9vMA9KulepUXkNZcoFHJCC85kdyZB++JHUIwIQQD0TERgJfQ8iAx8VMdD",
          "x-amz-request-id": "35Y7M4WSVFZBZYW7",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "d63c82557dd3cea20cb744efd834e670",
            key:
              "gds/id_00-0b-0100_radar-observation-sequence_lset003_rcid202.xml",
            sequencer: "006063794B664932CB",
            size: 1922,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131852604",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131852602",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:28.722Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"35Y7M4WSVFZBZYW7","x-amz-id-2":"XqpBGfULnBu0W9r2lBcTNr/TPyjWFVT+sZVTisQ9vMA9KulepUXkNZcoFHJCC85kdyZB++JHUIwIQQD0TERgJfQ8iAx8VMdD"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-0b-0100_radar-observation-sequence_lset003_rcid202.xml","size":1922,"eTag":"d63c82557dd3cea20cb744efd834e670","sequencer":"006063794B664932CB"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "833e6c8e3868e1f527651aaf1c7815b0",
        messageAttributes: {},
        messageId: "f2623dec-6f76-4a00-8497-3f3e3da2ed7f",
        receiptHandle:
          "AQEB3M+62HohMAJcTYEBwrJMyeFwmuxwLJRHZPgvCIdQAElI6NN2BvWOaGyLqkuMRKAMPCe/mfYolfycOJXR6TUT4u4ts1cTi1w85tdhEMu3OBxMqpYpYLNqV7YmoFmpTerPBH74obJMPf24SId/axSz3g7pzAdBhjUdXrMvUWRVPHSUP1uVXDbW+7HbQou0dkSvPNL6qwk715mqJqHbUZsoEGFTSIfyCTRHOtjyCUB89Y/ZyBn/rm9DJJzoCFE027QIf2nPg/kkmETED0hufqbWKneFhINFw26AhNpZpZZ9/UMs01VLWVexehr4nN9C+NgGG+EH+dD3GtOzemcMi8hUyDxg2NfBUylbOYsmuPLVE87zagym0vZKPHEsuVhdhODRVmbjnpGVhDG4vVyHe5cgVJ4BrkdgaDaIgDZbV+6qvSQ=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0b-0100_radar-observation-sequence_lset003_rcid202.xml",
      ],
      wasGeneratedBy: "task_id:e449919c-d45a-4157-bc5a-723e0153894b",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-0b-0100_radar-observation-sequence_lset003_rcid202",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:21.380953Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-08-0100_radar-observation-sequence_lset003_rcid199",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-08-0100_radar-observation-sequence_lset003_rcid199",
    ],
    creation_timestamp: "2021-03-30T19:18:11.951",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-08-0100_radar-observation-sequence_lset003_rcid199",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-08-0100_radar-observation-sequence_lset003_rcid199.xml-20210330T191740.460100Z/output/id_00-08-0100_radar-observation-sequence_lset003_rcid199",
      FileName: "id_00-08-0100_radar-observation-sequence_lset003_rcid199.xml",
      FileSize: 1921,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-08-0100_radar-observation-sequence_lset003_rcid199.xml",
      ],
      Kind: 8,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:40.054641Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:11.946215Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 199,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:35.904Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "8/CqegR0jQgufDqp0UK234KhRCzWtBHIRzl6MEp7NJAYQ1PIkuNAYM1DJvje6rZ618xrEoWgvajp8qJd4wAMugIcfa0Ft3M+",
          "x-amz-request-id": "B57546R85VZ5N98K",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "79be7725ab407bdfecfc6f38868605dd",
            key:
              "gds/id_00-08-0100_radar-observation-sequence_lset003_rcid199.xml",
            sequencer: "0060637952B89EA32F",
            size: 1921,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131859981",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131859980",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:35.904Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"B57546R85VZ5N98K","x-amz-id-2":"8/CqegR0jQgufDqp0UK234KhRCzWtBHIRzl6MEp7NJAYQ1PIkuNAYM1DJvje6rZ618xrEoWgvajp8qJd4wAMugIcfa0Ft3M+"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-08-0100_radar-observation-sequence_lset003_rcid199.xml","size":1921,"eTag":"79be7725ab407bdfecfc6f38868605dd","sequencer":"0060637952B89EA32F"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "26ac79f19bda050da85497c31614ab4c",
        messageAttributes: {},
        messageId: "24f80f5a-f880-4641-a79c-015db7fd1506",
        receiptHandle:
          "AQEBL6RxJuCCdh2bXJdqzdrWOiT1DTtXGEK1Z0QmR6zcTc0mUVSUnt7Ug5sX6fb5DfhoKSfPofwSl4N74lkS1knE2NnfFlTGWpZeKY3hEGJl3jLuJK/6gJnxI3KFuX47iQRzsLkj/8nOCf/+1Z1fA7oEwUIpwn+7J5JqDyKDJVdUAcWT5hhRlqo1cDuR1p8QLZNQmm9Om69oA3YoHUz0cwrXAGmj8saiuXdGpUOL4EMC8CyxPFw1ZCr2/ogsj96AVMFrF+ys6wCf5D9XF3/BIzGzJof95XQgEYZ4z9m+ue5Mz4K/bODN2FRN90eqpZWrxf243zD2C/TKEU5YwPQPQgh0SO9n/cP9Tgp+FpHjdiyBJ893y9fLKlMJXqCwVSRjTVpC2jxHCBKjWPaX86NfKmSvGk2nrUxriS7j4gCFLnw5Lg4=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-08-0100_radar-observation-sequence_lset003_rcid199",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-08-0100_radar-observation-sequence_lset003_rcid199",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-08-0100_radar-observation-sequence_lset003_rcid199.xml",
      ],
      wasGeneratedBy: "task_id:91e9267a-dff8-401e-930f-4b7f324bcc9c",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-08-0100_radar-observation-sequence_lset003_rcid199",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-08-0100_radar-observation-sequence_lset003_rcid199",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:02.024281Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-02-0100_radar-observation-sequence_lset003_rcid193",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-02-0100_radar-observation-sequence_lset003_rcid193",
    ],
    creation_timestamp: "2021-03-30T19:17:53.079",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-02-0100_radar-observation-sequence_lset003_rcid193",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-02-0100_radar-observation-sequence_lset003_rcid193.xml-20210330T191736.645733Z/output/id_00-02-0100_radar-observation-sequence_lset003_rcid193",
      FileName: "id_00-02-0100_radar-observation-sequence_lset003_rcid193.xml",
      FileSize: 1920,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-02-0100_radar-observation-sequence_lset003_rcid193.xml",
      ],
      Kind: 2,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:36.391245Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:53.074705Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 193,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:32.233Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "VtX7ul8+cbSIvHmHQ61c/jzF9/1hbh1I8PoK/zDAFejXMpoMFs/ziGq1Iz+e8OVZk+12Ae4JuM8bAPyJ2j2XetW+7Uj3/Lun",
          "x-amz-request-id": "XPBEC2YPM72CDMVD",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "0366f54b2feb13bf936ccc643288758a",
            key:
              "gds/id_00-02-0100_radar-observation-sequence_lset003_rcid193.xml",
            sequencer: "006063794F031014FD",
            size: 1920,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131856273",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131856272",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:32.233Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"XPBEC2YPM72CDMVD","x-amz-id-2":"VtX7ul8+cbSIvHmHQ61c/jzF9/1hbh1I8PoK/zDAFejXMpoMFs/ziGq1Iz+e8OVZk+12Ae4JuM8bAPyJ2j2XetW+7Uj3/Lun"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-02-0100_radar-observation-sequence_lset003_rcid193.xml","size":1920,"eTag":"0366f54b2feb13bf936ccc643288758a","sequencer":"006063794F031014FD"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "43ff24770a3064189a0e6ecac97597e6",
        messageAttributes: {},
        messageId: "b140e661-e457-414c-af47-2984f0c3d600",
        receiptHandle:
          "AQEB3wu2djiLLhufDHfGA2YJEl9lhk2JDV/tthEjbRoJaOwGyAxt5I9PkzuNxgJCkWT58LlnEYRfWdpKYwLjXIIfdSN11VnXkdjscNaOfALizfQcCFDPjNd7wWp2x1cG5Fn2AJMdQgVbwUyQvTclrOoIQh0g4ZDeSv34zFNFOeFuOGFvTMR9t1WVO+9fHBQ34/bM+EHfDE1LL+lFoFT20EfDGrnVhV8JfZq6S0sJ1P19Jp6NneHRdZ7j4ioXv/Qu6lB9GxjNCgmDEyk9XTPfLY9rfxE4OxDc1JtXW5xdSwlpLkE6fmQlfOtp2S362oBdpJVvFrLfvqAxBLaZND9NT5eGTAm7jwbnCAzqDh9BMoCQbV8/NFKbCJ+HI1kOgNKQ1RrFPDDDo/5m57kxlfY3p+tDzqaQsScILc4pA26wWiLhAZo=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-02-0100_radar-observation-sequence_lset003_rcid193",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-02-0100_radar-observation-sequence_lset003_rcid193",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-02-0100_radar-observation-sequence_lset003_rcid193.xml",
      ],
      wasGeneratedBy: "task_id:4df93c24-106a-48ec-863c-4b366f5edc8c",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-02-0100_radar-observation-sequence_lset003_rcid193",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-02-0100_radar-observation-sequence_lset003_rcid193",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:05.086413Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
    ],
    creation_timestamp: "2021-03-30T19:17:55.192",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/17/ingest-staged-id_00-0d-0100_radar-observation-sequence_lset003_rcid204.xml-20210330T191737.720833Z/output/id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
      FileName: "id_00-0d-0100_radar-observation-sequence_lset003_rcid204.xml",
      FileSize: 1921,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0d-0100_radar-observation-sequence_lset003_rcid204.xml",
      ],
      Kind: 13,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:37.474112Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:17:55.186611Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 204,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:29.865Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "jLolgMh/SEImvgoPQH6uPITYdAB0EeI2msGtklrvbPjH66uXFFleEEHNdwCRbtdlQfoMQWiv3PFhLj7LVnOg+8+GnXWamzYV",
          "x-amz-request-id": "PJ4EQAHYNBAX6YD2",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "bc983bc70be868e839e3d36ebddee087",
            key:
              "gds/id_00-0d-0100_radar-observation-sequence_lset003_rcid204.xml",
            sequencer: "006063794C9A26F599",
            size: 1921,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131853953",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131853946",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:30.457Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"TD2TDXG7GNSWKWJK","x-amz-id-2":"1lQnBANxlcAj13qUXYDHLKC/x/v+pPmFVdJ/btrsafQihReIbCU1vhnfaOI5ZxXIJO3h7HyQyT9vNY0Hus5yc4yhkwEOX3xg"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-0e-0100_radar-observation-sequence_lset003_rcid205.xml","size":1921,"eTag":"1850b326534f0b9c20c687b20017269e","sequencer":"006063794D2EE51016"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "471b658c2627ef49150ac95f942a9e6a",
        messageAttributes: {},
        messageId: "dc2c5869-21e9-40d9-9b6f-792e688588ae",
        receiptHandle:
          "AQEBATtLLIOk+naxnD+gEbzw+bQIbQogtJ1DUQozjGz7IAjxWNqk1+I1GoKopYuLMhCnEts8Mb8iwmerEhSqXOXXpY7JbjkrUqNpkkgTO6AljmIP+LMnGXWfNRhSNEu3BaZHKx99md2YuaQqhj+f5J+R4nxSk/kcmp9fmiDya9tHhH0O9bEC0XzuhroM2ipMXdq+mojMVFnuq84d+3ouftar+Kx2aP5nmPcUW4wafK/4JWEEU2eRPkB7VcNZG2KUVwXqCx80jc8WU5/6EJyF0Sk9SS4gts89uHcUNjmGg5YZO8GDl8U5leJqu/lbbeV9ZpLsQZKbICd7VQo56PbMKfCQRZsfKg0fzpKQl+aI31i5MQMIoMj5HgNGPTt+RMevOg5Q/Vkeiyl2Jf+HvBw4eJzJSKKx44AuWlg3iQKiUJUtsBw=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-0d-0100_radar-observation-sequence_lset003_rcid204.xml",
      ],
      wasGeneratedBy: "task_id:151071e2-3119-44f6-ab24-07b962d72fff",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-0d-0100_radar-observation-sequence_lset003_rcid204",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:31.818544Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-10-0100_radar-observation-sequence_lset003_rcid207",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-10-0100_radar-observation-sequence_lset003_rcid207",
    ],
    creation_timestamp: "2021-03-30T19:18:22.223",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-10-0100_radar-observation-sequence_lset003_rcid207",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-10-0100_radar-observation-sequence_lset003_rcid207.xml-20210330T191741.432971Z/output/id_00-10-0100_radar-observation-sequence_lset003_rcid207",
      FileName: "id_00-10-0100_radar-observation-sequence_lset003_rcid207.xml",
      FileSize: 1921,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-10-0100_radar-observation-sequence_lset003_rcid207.xml",
      ],
      Kind: 16,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:41.197906Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:22.218115Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 207,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:37.072Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "Fm6VFfIb1S98hOAvZSRda02IBfv9PxvgdoZihMnOjsWhHiAt2ReqQi3Obe5iF+1MD+EUbCzWyQ1N8T6kiqUxn/UD8wNDo2vw",
          "x-amz-request-id": "B9CM7KJC042EGCKT",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "4785324345dfc234d4fc30c2d2d7e998",
            key:
              "gds/id_00-10-0100_radar-observation-sequence_lset003_rcid207.xml",
            sequencer: "0060637953EE30348C",
            size: 1921,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131861100",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131861099",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:37.072Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"B9CM7KJC042EGCKT","x-amz-id-2":"Fm6VFfIb1S98hOAvZSRda02IBfv9PxvgdoZihMnOjsWhHiAt2ReqQi3Obe5iF+1MD+EUbCzWyQ1N8T6kiqUxn/UD8wNDo2vw"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-10-0100_radar-observation-sequence_lset003_rcid207.xml","size":1921,"eTag":"4785324345dfc234d4fc30c2d2d7e998","sequencer":"0060637953EE30348C"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "72ab42cd5463479e0ad122509d0b6d4f",
        messageAttributes: {},
        messageId: "1eb5d2d8-7663-4d15-8211-b84e1e8214e6",
        receiptHandle:
          "AQEBOrL7Bv9BFhTnxxZqdEwstPX2PuQWMc/2lkaI3mTOXGdBYkb9cSvlLn5OxJk1sasCJLSobRr5wBoBUv6IkipnOYrjrWmiHGugujPmn7/IaNcH3EQGd+atmg+dN3F80eMtN2xUlimI3Epj2969uKFs2q+3s8JuCa6WB0krfE/zpIv/UcLN8vGYNirADuMi/o4aAY0iJaxjNSsghSMOZ85OsPQBjsgEGF9CXyhfJva+zTLn77y678x5YdMwb3TfvJTYpUY8wD+ll7/aJraZirZHSFWJZV+L7/Vvz3yIbHIo+xt4gJefC8W8hQ2bau0IGLiiJu1pjH4lunBkvUSxGt/mXrVFsHN9cLdoiKjuhkgolWrE3olqEXEsINKQGCmbPVsmXMUO3sPIifyXXkHqaRZ7YZHjeGf7yY1XFupjK9Hr3cc=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-10-0100_radar-observation-sequence_lset003_rcid207",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-10-0100_radar-observation-sequence_lset003_rcid207",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-10-0100_radar-observation-sequence_lset003_rcid207.xml",
      ],
      wasGeneratedBy: "task_id:e2efdff5-5155-468f-a7a6-fb234c7191a4",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-10-0100_radar-observation-sequence_lset003_rcid207",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-10-0100_radar-observation-sequence_lset003_rcid207",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:17.106553Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-04-0100_radar-observation-sequence_lset003_rcid195",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-04-0100_radar-observation-sequence_lset003_rcid195",
    ],
    creation_timestamp: "2021-03-30T19:18:07.314",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-04-0100_radar-observation-sequence_lset003_rcid195",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-04-0100_radar-observation-sequence_lset003_rcid195.xml-20210330T191738.352081Z/output/id_00-04-0100_radar-observation-sequence_lset003_rcid195",
      FileName: "id_00-04-0100_radar-observation-sequence_lset003_rcid195.xml",
      FileSize: 1920,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-04-0100_radar-observation-sequence_lset003_rcid195.xml",
      ],
      Kind: 4,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:38.079736Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:07.309571Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 195,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:33.448Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "z4IHOjPyEAsFv7P1NOyDnFXuJxun08V09vQqQJC7nxwFZGXIWl6i3126FuFiWp78iKDP9Vh+ERAlXoOnoYSJ56QeA8tP8LDJ",
          "x-amz-request-id": "521G202Y7HMPS0EP",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "7bd8f3eb3c5bff5e1916cdc4517b145f",
            key:
              "gds/id_00-04-0100_radar-observation-sequence_lset003_rcid195.xml",
            sequencer: "00606379503698B534",
            size: 1920,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131857665",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131857664",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:34.012Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"521QVPRTGN64CR53","x-amz-id-2":"2vNWRsNzyHeF1iCIvDl9855AV9YJHxWKfTp4lYhbIINH43/t8et0rDCCDSHfEHg+KtdMk2LLL4/rSHq3yhkDnRU1Dp1XWmf/"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-05-0100_radar-observation-sequence_lset003_rcid196.xml","size":1920,"eTag":"1f505e479b746378760a63693000254e","sequencer":"0060637950D0DF2A4F"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "fb79565591ec6f1fa60f7c24e3f97f1e",
        messageAttributes: {},
        messageId: "b593bb35-9602-4690-8822-83568b72ad5d",
        receiptHandle:
          "AQEBY2/kUvNJOTLKKkBQ/iObFfLSjoEcpSvbMYKnhTD7rrO8jA7pqtjOmj+reH0H9Bz3Xgew5kfj6Pzrs2g5Gt3FLeYcWEeS4yeNIK7EvQ0OHS+14Igl/HtEfJuoG2Lon3ZK4sJUlAD/GnWxYEqq7LMDVUN6UCp5y9LD/5DG7p0Lzq3Dx92w0WCjO6V1MG66pJ2y66/iqRNmWYG/JQYzsXb2u08XseQubMQIzS2q9rRXcZ/DeCBz91vCNfjqqtciFQRfKCrMGQ/EvBuqPulw0mM9T7X03yhj13J665ambyUY3ou//yXtobZdjfh/AhIp8ob5ZyRuhoYIJlse2ZYbtOnrw8M5PMDbYYvOfYHzIbShnCxT9s+osPZJMNid9BQ1hCSXhGyj2MYs7/nYm2aO5u9eqLw0MAdUcG+Dh5cJaIFmAUA=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-04-0100_radar-observation-sequence_lset003_rcid195",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-04-0100_radar-observation-sequence_lset003_rcid195",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-04-0100_radar-observation-sequence_lset003_rcid195.xml",
      ],
      wasGeneratedBy: "task_id:4b88f324-eb46-47e8-90ee-465c343f4655",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-04-0100_radar-observation-sequence_lset003_rcid195",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-04-0100_radar-observation-sequence_lset003_rcid195",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:21.305161Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-09-0100_radar-observation-sequence_lset003_rcid200",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-09-0100_radar-observation-sequence_lset003_rcid200",
    ],
    creation_timestamp: "2021-03-30T19:18:12.181",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-09-0100_radar-observation-sequence_lset003_rcid200",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-09-0100_radar-observation-sequence_lset003_rcid200.xml-20210330T191740.457438Z/output/id_00-09-0100_radar-observation-sequence_lset003_rcid200",
      FileName: "id_00-09-0100_radar-observation-sequence_lset003_rcid200.xml",
      FileSize: 1921,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-09-0100_radar-observation-sequence_lset003_rcid200.xml",
      ],
      Kind: 9,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:40.078557Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:12.175885Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 200,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:36.498Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "4VzZ26zp9nz6hZ/IEHjrdMUdTIIQx0GHnHL7gpkjSIZZoO/JEkENcQxnyz3dmC/twnbs2kZv9w2Q/29fRzrUPfmQ6kbCR4dB",
          "x-amz-request-id": "B9CPWHBNN9DNCYV6",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "9b210c7af15429b807413010bdc17d92",
            key:
              "gds/id_00-09-0100_radar-observation-sequence_lset003_rcid200.xml",
            sequencer: "0060637953518E7CDC",
            size: 1921,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131859986",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131859985",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:36.498Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"B9CPWHBNN9DNCYV6","x-amz-id-2":"4VzZ26zp9nz6hZ/IEHjrdMUdTIIQx0GHnHL7gpkjSIZZoO/JEkENcQxnyz3dmC/twnbs2kZv9w2Q/29fRzrUPfmQ6kbCR4dB"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-09-0100_radar-observation-sequence_lset003_rcid200.xml","size":1921,"eTag":"9b210c7af15429b807413010bdc17d92","sequencer":"0060637953518E7CDC"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "e02571e1d4e9574c4989f7b01d44222a",
        messageAttributes: {},
        messageId: "d02fe949-0170-4af4-9446-226b10f4bb28",
        receiptHandle:
          "AQEB9t6gtzygc1Qf1VZPDzB3UDPcH9SQiooYlXF044o9G89EszjwoormkgUMeEs6iUlE2MR3eQ6tsxz7kX+dS/SBOfiTiiFBfjshxh/AKybukKHMmISzLqGH9HDOqjloLfySuMLuUpsfIRdCJzV0CdptL+qMVCYHsUasLU3Y1tXTnOsnLCxvk4U4N7cWpiaYI0r8XXNXpbZBsS4GYCu/fJJUly+x7AZPFqQbkXQ5gAwWiL4gHLDaThS9FIR6c7PtElc1Z3V8l47enB7/M+ssBA9lPI/L4RcAmt2IiBGdX61eoSZOpSBPSfn7RmJOOfMUXvbvblxH+t51/wyO6WvjwSAsHu9aaISlPFOMK+G2zQq5HHQ5I1gJqZVDWRJDJI5XHLr/w7WAWXwd2qzxGaSxsbJ541A+ACKDrRt3G+MCsFaWl+g=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-09-0100_radar-observation-sequence_lset003_rcid200",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-09-0100_radar-observation-sequence_lset003_rcid200",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-09-0100_radar-observation-sequence_lset003_rcid200.xml",
      ],
      wasGeneratedBy: "task_id:cc2ebb92-096a-41d4-ab04-3da78f8f1334",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-09-0100_radar-observation-sequence_lset003_rcid200",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-09-0100_radar-observation-sequence_lset003_rcid200",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:15.763633Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-05-0100_radar-observation-sequence_lset003_rcid196",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-05-0100_radar-observation-sequence_lset003_rcid196",
    ],
    creation_timestamp: "2021-03-30T19:18:05.808",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-05-0100_radar-observation-sequence_lset003_rcid196",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-05-0100_radar-observation-sequence_lset003_rcid196.xml-20210330T191738.7036Z/output/id_00-05-0100_radar-observation-sequence_lset003_rcid196",
      FileName: "id_00-05-0100_radar-observation-sequence_lset003_rcid196.xml",
      FileSize: 1920,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-05-0100_radar-observation-sequence_lset003_rcid196.xml",
      ],
      Kind: 5,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:37.738541Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:05.803353Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 196,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:34.012Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "2vNWRsNzyHeF1iCIvDl9855AV9YJHxWKfTp4lYhbIINH43/t8et0rDCCDSHfEHg+KtdMk2LLL4/rSHq3yhkDnRU1Dp1XWmf/",
          "x-amz-request-id": "521QVPRTGN64CR53",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "1f505e479b746378760a63693000254e",
            key:
              "gds/id_00-05-0100_radar-observation-sequence_lset003_rcid196.xml",
            sequencer: "0060637950D0DF2A4F",
            size: 1920,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131857665",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131857664",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:34.012Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"521QVPRTGN64CR53","x-amz-id-2":"2vNWRsNzyHeF1iCIvDl9855AV9YJHxWKfTp4lYhbIINH43/t8et0rDCCDSHfEHg+KtdMk2LLL4/rSHq3yhkDnRU1Dp1XWmf/"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-05-0100_radar-observation-sequence_lset003_rcid196.xml","size":1920,"eTag":"1f505e479b746378760a63693000254e","sequencer":"0060637950D0DF2A4F"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "fb79565591ec6f1fa60f7c24e3f97f1e",
        messageAttributes: {},
        messageId: "b593bb35-9602-4690-8822-83568b72ad5d",
        receiptHandle:
          "AQEBY2/kUvNJOTLKKkBQ/iObFfLSjoEcpSvbMYKnhTD7rrO8jA7pqtjOmj+reH0H9Bz3Xgew5kfj6Pzrs2g5Gt3FLeYcWEeS4yeNIK7EvQ0OHS+14Igl/HtEfJuoG2Lon3ZK4sJUlAD/GnWxYEqq7LMDVUN6UCp5y9LD/5DG7p0Lzq3Dx92w0WCjO6V1MG66pJ2y66/iqRNmWYG/JQYzsXb2u08XseQubMQIzS2q9rRXcZ/DeCBz91vCNfjqqtciFQRfKCrMGQ/EvBuqPulw0mM9T7X03yhj13J665ambyUY3ou//yXtobZdjfh/AhIp8ob5ZyRuhoYIJlse2ZYbtOnrw8M5PMDbYYvOfYHzIbShnCxT9s+osPZJMNid9BQ1hCSXhGyj2MYs7/nYm2aO5u9eqLw0MAdUcG+Dh5cJaIFmAUA=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-05-0100_radar-observation-sequence_lset003_rcid196",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-05-0100_radar-observation-sequence_lset003_rcid196",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-05-0100_radar-observation-sequence_lset003_rcid196.xml",
      ],
      wasGeneratedBy: "task_id:93026d18-a62d-4a53-b21d-33ee182c65d9",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-05-0100_radar-observation-sequence_lset003_rcid196",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-05-0100_radar-observation-sequence_lset003_rcid196",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:31.902763Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/ROST/id_00-11-0100_radar-observation-sequence_lset003_rcid208",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/ROST/id_00-11-0100_radar-observation-sequence_lset003_rcid208",
    ],
    creation_timestamp: "2021-03-30T19:18:22.957",
    dataset: "ROST",
    dataset_level: "NA",
    dataset_type: "ROST",
    id: "id_00-11-0100_radar-observation-sequence_lset003_rcid208",
    images: [],
    ipath: "hysds::data/ROST",
    metadata: {
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-id_00-11-0100_radar-observation-sequence_lset003_rcid208.xml-20210330T191742.97209Z/output/id_00-11-0100_radar-observation-sequence_lset003_rcid208",
      FileName: "id_00-11-0100_radar-observation-sequence_lset003_rcid208.xml",
      FileSize: 1922,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-11-0100_radar-observation-sequence_lset003_rcid208.xml",
      ],
      Kind: 17,
      LSET: 3,
      Lambda_trigger_time: "2021-03-30T19:17:41.872494Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:22.953048Z",
      ProductReceivedYear: 2021,
      ProductType: "ROST",
      RCID: 208,
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:37.783Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "osq3sWHnjf4YSajQZO0+spWv7KDoPkkJxzeL5pzcV3bSqOCCoOIsOvwG+swI3yN3PHEEL7M4WLDnrbSlvGCWlAiL1+OC+EXx",
          "x-amz-request-id": "9N1RJKJ597YGP568",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "b6b5c57a151e2a2733958fac42b9d8ef",
            key:
              "gds/id_00-11-0100_radar-observation-sequence_lset003_rcid208.xml",
            sequencer: "0060637954A1A61FB8",
            size: 1922,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131861772",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131861770",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:37.783Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"9N1RJKJ597YGP568","x-amz-id-2":"osq3sWHnjf4YSajQZO0+spWv7KDoPkkJxzeL5pzcV3bSqOCCoOIsOvwG+swI3yN3PHEEL7M4WLDnrbSlvGCWlAiL1+OC+EXx"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/id_00-11-0100_radar-observation-sequence_lset003_rcid208.xml","size":1922,"eTag":"b6b5c57a151e2a2733958fac42b9d8ef","sequencer":"0060637954A1A61FB8"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "7f96ccb8c73ae428745c43ac7932684f",
        messageAttributes: {},
        messageId: "2ee131fe-267f-4a43-b622-30d1374a0cf9",
        receiptHandle:
          "AQEBH1URCHLC/FtP3V1F9Kd8mBA4u6hzayLTwTQGUju9670BKPzsdk/90KCq8Y65H5JMs4phxDYuHGNDXAgnbjtmRtLwj9pyT3wzKk29GYCqghQ/G9DVyDZvsExxdjfMHjwZkuTeWLRtUn3W/mxfr1awuWIehggF+b/llUfnZUFvb8GOMQBZhEzz+tGlQAGzzf9J7uHo7XzZxNFe8l8/pu1WfdDeUqhvEct0D5TH5pqNmlMo7igucibpqAPAtnuLPgPUOyarMNSndWXSqATjmc+tOh92yVs6+KifvEvgbWPkgpEdE28sy3Y/xh3eO8nPkK9lgNjcgiaagZAII6CVagQzTNZmmgaJTV28w2xlkAM4teADDzmjb5Bl/jKwNt8ufSpWnY2KnBKxsl9y1jWUkr4JkNPzMs4cx0x5hL0jeNKlI94=",
      },
      Type: 0,
      Variant: 100,
      id: "id_00-11-0100_radar-observation-sequence_lset003_rcid208",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "id_00-11-0100_radar-observation-sequence_lset003_rcid208",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/id_00-11-0100_radar-observation-sequence_lset003_rcid208.xml",
      ],
      wasGeneratedBy: "task_id:0e4fe8f3-5e2e-4779-925b-d0ff727425d5",
    },
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/ROST/id_00-11-0100_radar-observation-sequence_lset003_rcid208",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/ROST/id_00-11-0100_radar-observation-sequence_lset003_rcid208",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:18:46.459139Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/STUF/2022/01/07/nisar_stuf_20220101232340_20220107235959_20220110000001",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/STUF/2022/01/07/nisar_stuf_20220101232340_20220107235959_20220110000001",
    ],
    creation_timestamp: "2021-03-30T19:18:37.519",
    dataset: "STUF",
    dataset_level: "NA",
    dataset_type: "STUF",
    endtime: "2022-01-10T00:00:01.000000Z",
    id: "nisar_stuf_20220101232340_20220107235959_20220110000001",
    images: [],
    ipath: "hysds::data/STUF",
    metadata: {
      CreationDateTime: "2022-01-01T23:23:40.000000Z",
      FileLocation:
        "/data/work/jobs/2021/03/30/19/18/ingest-staged-nisar_stuf_20220101232340_20220107235959_20220110000001.xml-20210330T191747.56464Z/output/nisar_stuf_20220101232340_20220107235959_20220110000001",
      FileName: "nisar_stuf_20220101232340_20220107235959_20220110000001.xml",
      FileSize: 8025,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/nisar_stuf_20220101232340_20220107235959_20220110000001.xml",
      ],
      Lambda_trigger_time: "2021-03-30T19:17:46.791204Z",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:18:37.512014Z",
      ProductReceivedYear: 2021,
      ProductType: "STUF",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:17:42.167Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "5WCRESfKhCk7P33dtaEopW6Dt4WzBBgpkYfF8ZGrs+8tUXnrXkIrVAZTK7V3JmcJd/fKxs1raCZRasUs49UkbOs7n1SVjeEP",
          "x-amz-request-id": "JCN880TN41WJJD12",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "b02f9d8a550777edeac23b2699e9785e",
            key:
              "gds/nisar_stuf_20220101232340_20220107235959_20220110000001.xml",
            sequencer: "006063795900683881",
            size: 8025,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617131866717",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617131866716",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:17:42.167Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"JCN880TN41WJJD12","x-amz-id-2":"5WCRESfKhCk7P33dtaEopW6Dt4WzBBgpkYfF8ZGrs+8tUXnrXkIrVAZTK7V3JmcJd/fKxs1raCZRasUs49UkbOs7n1SVjeEP"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"gds/nisar_stuf_20220101232340_20220107235959_20220110000001.xml","size":8025,"eTag":"b02f9d8a550777edeac23b2699e9785e","sequencer":"006063795900683881"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "e91c31817a077554551efd529fe47e4e",
        messageAttributes: {},
        messageId: "2c512b70-e8ab-4c7a-92b3-667add88bd9c",
        receiptHandle:
          "AQEBgV7TbFjs0vF0kj8EwUzH/3vTXMfsDdreda/R122T2tb5ONQ/nRO57zKbJUydSA7roI022zuohsBCWqy7AFrKsjTCyROmqr03RJBROCyfA+twD5dn3peE1A/eEKub8exGSeFqVW1qfhyOz9HKDCxKli3WDT9fGFojAcnt3aQE8qhz8ikQdaKvxBx3Azk3s8d0TNsQx1DyPwYak7RC+kfVQDhka0DbVD9jydSCg1oA6M7d6dJotJ76aJ4K2JOiSSytaO9nY+VXRhCKD7MnpOS/5tIWVA5DI2o6X5wAgVAsq9AecOG289vCt+LnjQvGdo/u0zPcpvO0abyyRJZnqa87Jjcv42oKkBOT2NMAlBNhsV3rpnjyTboA/OeYCia2UmX5XdfpaNlvz7O71omI7j/CTOGzi43+YlGagX3DSPfqbVc=",
      },
      ValidityEndDateTime: "2022-01-10T00:00:01.000000Z",
      ValidityStartDateTime: "2022-01-07T23:59:59.000000Z",
      id: "nisar_stuf_20220101232340_20220107235959_20220110000001",
      restaged: false,
      tags: ["ISL"],
    },
    objectid: "nisar_stuf_20220101232340_20220107235959_20220110000001",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/gds/nisar_stuf_20220101232340_20220107235959_20220110000001.xml",
      ],
      wasGeneratedBy: "task_id:32cc685b-38a3-44b6-a6e7-8a0eded96668",
    },
    starttime: "2022-01-07T23:59:59.000000Z",
    system_version: "1",
    temporal_span: 2,
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/STUF/2022/01/07/nisar_stuf_20220101232340_20220107235959_20220110000001",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/STUF/2022/01/07/nisar_stuf_20220101232340_20220107235959_20220110000001",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:22:34.358070Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/LDF/2022/008/WFF_NISAR_2022_008_17_10_00_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/LDF/2022/008/WFF_NISAR_2022_008_17_10_00_LDF",
    ],
    creation_timestamp: "2021-03-30T19:22:24.519",
    dataset: "LDF",
    dataset_level: "NA",
    dataset_type: "LDF",
    id: "WFF_NISAR_2022_008_17_10_00_LDF",
    images: [],
    ipath: "hysds::data/LDF",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 17,
      CreationMinute: 10,
      CreationSecond: 0,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/22/ingest-staged-WFF_NISAR_2022_008_17_10_00.ldf-20210330T192110.194247Z/output/WFF_NISAR_2022_008_17_10_00_LDF",
      FileName: "WFF_NISAR_2022_008_17_10_00.ldf",
      FileSize: 228,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/WFF_NISAR_2022_008_17_10_00.ldf",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:09.675454Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:24.509255Z",
      ProductReceivedYear: 2021,
      ProductType: "LDF",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:21:06.997Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "jViMZv1Xxf63KvBRzjWluR8eTmmI1ruQ1Z2zDGjz7Czh9PDr/2JcxG8hmbOphVwYd2kbCVxDg8XaCzmsUSBvVm656z+Om7go",
          "x-amz-request-id": "04A4HY2P72DJDVW6",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "72a9e6e5088e1043e1c6b5d94b9c96b5",
            key: "ldf/WFF_NISAR_2022_008_17_10_00.ldf",
            sequencer: "0060637A243AB5A794",
            size: 228,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132069585",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132069584",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:21:06.997Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"04A4HY2P72DJDVW6","x-amz-id-2":"jViMZv1Xxf63KvBRzjWluR8eTmmI1ruQ1Z2zDGjz7Czh9PDr/2JcxG8hmbOphVwYd2kbCVxDg8XaCzmsUSBvVm656z+Om7go"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"ldf/WFF_NISAR_2022_008_17_10_00.ldf","size":228,"eTag":"72a9e6e5088e1043e1c6b5d94b9c96b5","sequencer":"0060637A243AB5A794"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "a8a450083169cf289cb134956ecc5881",
        messageAttributes: {},
        messageId: "5b082c13-b414-4197-bca3-ed8cbe527674",
        receiptHandle:
          "AQEBeKxW58CpFvAwOtmN1oEQ2eLkXoJRcKdMibsoQkJYuZbR225YQA1IxnYVW7QOV91NhRauPHSRDXzrjc2T25oKUq+nSodJkZDMyMUoRwYMLEbVk51tMrOY4xSRXf7yN9xmv6eNH49KWujgyNs6veO9vOLPEDDDJzjY6r2WzjZCszRjcxLoz6glsH//SxFLA89P2hyleoy9AkYCVrwhM7bNUYApoXKGVeZO8MCmDmecBL6Sik2ezRqy1idE//LkGn5/KpKsFym0HmJ0JZfQg37R5o9kdDyzu26GPJ4ZTJq/EsOWn2988jKpIpFOjGdshEiTwIcmy2P076gWmgoowIQlsdbRKUqiDCEbK//UbExPE2sFG+i+EbQedx2MgjO/gMX4olYXx/UDrWAI5sCiy3fWC8mVDKcb/dYqOVK7Tu+DrJY=",
      },
      Station: "WFF",
      id: "WFF_NISAR_2022_008_17_10_00.ldf",
      restaged: false,
      rrst_files: [
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_11_56_000000000.vc35",
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_17_13_20_000000000.vc35",
      ],
      tags: ["ISL"],
    },
    objectid: "WFF_NISAR_2022_008_17_10_00_LDF",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/WFF_NISAR_2022_008_17_10_00.ldf",
      ],
      wasGeneratedBy: "task_id:5fa75056-eea3-4e5c-8d28-aea7b7e70a6d",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/LDF/2022/008/WFF_NISAR_2022_008_17_10_00_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/LDF/2022/008/WFF_NISAR_2022_008_17_10_00_LDF",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:20:59.879058Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/LDF/2022/008/ASF_NISAR_2022_008_06_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/LDF/2022/008/ASF_NISAR_2022_008_06_30_59_LDF",
    ],
    creation_timestamp: "2021-03-30T19:20:50.348",
    dataset: "LDF",
    dataset_level: "NA",
    dataset_type: "LDF",
    id: "ASF_NISAR_2022_008_06_30_59_LDF",
    images: [],
    ipath: "hysds::data/LDF",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 6,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-ASF_NISAR_2022_008_06_30_59.ldf-20210330T192026.487962Z/output/ASF_NISAR_2022_008_06_30_59_LDF",
      FileName: "ASF_NISAR_2022_008_06_30_59.ldf",
      FileSize: 890,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/ASF_NISAR_2022_008_06_30_59.ldf",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:25.389732Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:50.334610Z",
      ProductReceivedYear: 2021,
      ProductType: "LDF",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:23.856Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "VG/hKJzrkecZlCu09mFzr9WepfdSf7Au79nhCUyeXuUBQhSmT0PjnUwB5LU6LxjWyMDTc7rD4Ak+v+3LWighFFciloqkkEFr",
          "x-amz-request-id": "B1A33534CH51J71A",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "01867044cb6348c1178bb1a978c3fdd2",
            key: "ldf/ASF_NISAR_2022_008_06_30_59.ldf",
            sequencer: "00606379F8897E4781",
            size: 890,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132025280",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132025279",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:23.856Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"B1A33534CH51J71A","x-amz-id-2":"VG/hKJzrkecZlCu09mFzr9WepfdSf7Au79nhCUyeXuUBQhSmT0PjnUwB5LU6LxjWyMDTc7rD4Ak+v+3LWighFFciloqkkEFr"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"ldf/ASF_NISAR_2022_008_06_30_59.ldf","size":890,"eTag":"01867044cb6348c1178bb1a978c3fdd2","sequencer":"00606379F8897E4781"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "7ddbb6fd921b47780af5a27e7dcb30b3",
        messageAttributes: {},
        messageId: "323ee99c-d3fe-4df7-89a8-550906a07bba",
        receiptHandle:
          "AQEBUscMo4UeHShWxlsQKLWZD0QpeKdK2gcv8VURicMAbaFg/Vv4W230gfPfjijcadknr3uhAdPwJFArBUJqKwXrCL+79anCK43Trl2WZN8ZHvdfqUFMnjWCODrkzCQmY7ADxrFxmr0F3K6+/UhE9psYYOfUq93CSLWFtfoQ3WUsXZucJ5b7s8zgDt4pCHQB0Fo5I5zg5ytIFcXQcnDVR1zQYFDi80C0scmlxY9RPlyQ7wSug2Z41qEl1bqXiXeS6RdWJYsw/UiF5HjUuxZTTvwtKouzelQIex4aoFuUTN1QEFhk98JqOZMbq6IOpWvIWLsw0awDuhIENsfD2FXDZbGzDFnoVnDJ74xSCAaiaNomeB5YvhxyY6R0jVZC8aRMJvN42RX7g0cglATw0CxQo9dPDvUSY4mKGbhFJpaQ+vmKbCM=",
      },
      Station: "ASF",
      id: "ASF_NISAR_2022_008_06_30_59.ldf",
      restaged: false,
      rrst_files: [
        "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2022_008_07_10_28_000000000.vc24",
        "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2022_008_07_10_28_000000000.vc29",
        "NISAR_S198_ASF_SG11_M00_P00114_R31_C32_G81_2022_008_07_25_59_000000000.vc24",
        "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2022_008_07_28_30_000000000.vc29",
        "NISAR_S198_ASF_SG11_M00_P00114_R22_C23_G81_2022_008_07_28_34_000000000.vc24",
        "NISAR_S198_ASF_PA12_M01_P00114_R22_C23_G81_2022_008_07_28_45_000000000.vc29",
        "NISAR_S198_ASF_WG5_M00_P00114_R44_C45_G81_2022_008_07_28_50_000000000.vc24",
        "NISAR_S198_ASF_SG11_M00_P00114_R13_C14_G81_2022_008_07_34_00_000000000.vc24",
        "NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2022_008_07_29_40_000000000.vc29",
        "NISAR_S198_ASF_AS4_M00_P00114_R33_C34_G81_2022_008_07_34_00_000000000.vc29",
      ],
      tags: ["ISL"],
    },
    objectid: "ASF_NISAR_2022_008_06_30_59_LDF",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/ASF_NISAR_2022_008_06_30_59.ldf",
      ],
      wasGeneratedBy: "task_id:58bb6a50-58e5-45f4-b0c5-ca05301791d0",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/LDF/2022/008/ASF_NISAR_2022_008_06_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/LDF/2022/008/ASF_NISAR_2022_008_06_30_59_LDF",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:20:27.410040Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/LDF/2020/008/ASF_NISAR_2020_008_06_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/LDF/2020/008/ASF_NISAR_2020_008_06_30_59_LDF",
    ],
    creation_timestamp: "2021-03-30T19:20:17.948",
    dataset: "LDF",
    dataset_level: "NA",
    dataset_type: "LDF",
    id: "ASF_NISAR_2020_008_06_30_59_LDF",
    images: [],
    ipath: "hysds::data/LDF",
    metadata: {
      CreationDateTime: "2020-01-08T00:00:00.000000Z",
      CreationHour: 6,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/20/ingest-staged-ASF_NISAR_2020_008_06_30_59.ldf-20210330T192012.850499Z/output/ASF_NISAR_2020_008_06_30_59_LDF",
      FileName: "ASF_NISAR_2020_008_06_30_59.ldf",
      FileSize: 394,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/ASF_NISAR_2020_008_06_30_59.ldf",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:12.317923Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:20:17.938934Z",
      ProductReceivedYear: 2021,
      ProductType: "LDF",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:10.927Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "/BbvKx4BU74elSZmTdzOdIAqS5AQqs6NldW8dF8m2cX/guJ32H6WRU98bP6hyBC3RqOYtukaYnh8STi02XEYIrBRPLdLWayT",
          "x-amz-request-id": "AQ53HXXP5A38CBB5",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "16995f176766da68c5197efe8d1be380",
            key: "ldf/ASF_NISAR_2020_008_06_30_59.ldf",
            sequencer: "00606379EB5C153554",
            size: 394,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132012205",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132012132",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:10.927Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"AQ53HXXP5A38CBB5","x-amz-id-2":"/BbvKx4BU74elSZmTdzOdIAqS5AQqs6NldW8dF8m2cX/guJ32H6WRU98bP6hyBC3RqOYtukaYnh8STi02XEYIrBRPLdLWayT"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"ldf/ASF_NISAR_2020_008_06_30_59.ldf","size":394,"eTag":"16995f176766da68c5197efe8d1be380","sequencer":"00606379EB5C153554"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "8c40e2392bf255d9cbb9002432c95e0a",
        messageAttributes: {},
        messageId: "01db6aa4-d4f3-472b-a61f-a1c69b499c35",
        receiptHandle:
          "AQEBIaKxHhQapHOnZLgaPgpmO4RxpjuI3PUJm55JZT3srPxKMueK9ntAtH5tzoi10d37Th0Rik9396FtQ0vraXyMMI8cp/uRAsn1616+GadW7XavrVd9ih0fFQ9UMG1w9V6o1iBx7Oi/n4+aQt09Jl2QprM0yUI+xvtZ+4InRrikgmGL9IMnPDgV2dm4qVXcEcK0djNrR0QFPBFsv0N6rrNeCm8oWLJVWRUlft2UNSEYqxxnNN0WRSOlpiUnR+z9fzsebxN7oQJjBmURU0tQ10PBBwFGUxet73duq7ybuQ7L+bzlomickbE41wPBJzx45T/0iUHqDBuQ6lc/5arjYfdJ1vkSAGnHaXHkrJf5CVqktjVRhvq470iycGBNU6hPttwYWONhzS62cw+w6XpEa3GRQg8FWLJl2FPSaKUEeFIRj5I=",
      },
      Station: "ASF",
      id: "ASF_NISAR_2020_008_06_30_59.ldf",
      restaged: false,
      rrst_files: [
        "NISAR_S198_ASF_AS4_M00_P00114_R04_C05_G81_2020_008_07_10_28_000000000.vc24",
        "NISAR_S198_ASF_AS4_M00_P00114_R31_C32_G81_2020_008_07_10_28_000000000.vc29",
        "NISAR_S198_ASF_AS4_M00_P00114_R30_C31_G81_2020_008_07_28_30_000000000.vc29",
        "NISAR_S198_ASF_AS4_M00_P00114_R07_C08_G81_2020_008_07_29_40_000000000.vc29",
      ],
      tags: ["ISL"],
    },
    objectid: "ASF_NISAR_2020_008_06_30_59_LDF",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/ASF_NISAR_2020_008_06_30_59.ldf",
      ],
      wasGeneratedBy: "task_id:5120a048-7982-4c66-94e3-ca360414d3a1",
    },
    starttime: "2020-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/LDF/2020/008/ASF_NISAR_2020_008_06_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/LDF/2020/008/ASF_NISAR_2020_008_06_30_59_LDF",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:22:20.520094Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/LDF/2022/008/PA_NISAR_2022_008_09_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/LDF/2022/008/PA_NISAR_2022_008_09_30_59_LDF",
    ],
    creation_timestamp: "2021-03-30T19:22:10.991",
    dataset: "LDF",
    dataset_level: "NA",
    dataset_type: "LDF",
    id: "PA_NISAR_2022_008_09_30_59_LDF",
    images: [],
    ipath: "hysds::data/LDF",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 9,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/22/ingest-staged-PA_NISAR_2022_008_09_30_59.ldf-20210330T192105.518924Z/output/PA_NISAR_2022_008_09_30_59_LDF",
      FileName: "PA_NISAR_2022_008_09_30_59.ldf",
      FileSize: 389,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/PA_NISAR_2022_008_09_30_59.ldf",
      ],
      Lambda_trigger_time: "2021-03-30T19:21:04.993894Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:22:10.982064Z",
      ProductReceivedYear: 2021,
      ProductType: "LDF",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:21:02.950Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "43JDGcMJj6YkQA+uPKpT5vqMaJR3whK9vBkOGyiJnHScNxCkTc9v4ZkbF+SKyy5yCeZ7WzcyxMydJcMVr87o+5VlBm952e8E",
          "x-amz-request-id": "290F682EQK6BBHE3",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "13490e8b57d0d425c325cd8bf1587f51",
            key: "ldf/PA_NISAR_2022_008_09_30_59.ldf",
            sequencer: "0060637A202294DB80",
            size: 389,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132064892",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132064891",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:21:02.950Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"290F682EQK6BBHE3","x-amz-id-2":"43JDGcMJj6YkQA+uPKpT5vqMaJR3whK9vBkOGyiJnHScNxCkTc9v4ZkbF+SKyy5yCeZ7WzcyxMydJcMVr87o+5VlBm952e8E"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"ldf/PA_NISAR_2022_008_09_30_59.ldf","size":389,"eTag":"13490e8b57d0d425c325cd8bf1587f51","sequencer":"0060637A202294DB80"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "7d81d09ef50ae9eb52113e8eb32fd42e",
        messageAttributes: {},
        messageId: "3f6a9862-a66f-46a3-b1bb-837e2b4eb704",
        receiptHandle:
          "AQEBValH0gGsle+ppHeGc8a3HQP2F2G2AYjtKe3KY7uoTLWDhAmolB9Y+R3HweRVEt362bemB+Y8fJMbnEMScPc+bIoJxr40HE0dBMZHVEBxzQh7F2vmatSUKO+ZcWp4woy7tmw1j91snwbe+LSWxmBHrkmBpUC4vXzu8/vnxhJ/XJXq7pm1ojQ+E/CB+BasZ7oR6olmg/RpWVKt2xUvovPxy12lC3x4BCHaiCs6TnGrj6DQlUo57l+kZp6EUDbzwW6Kl99leFQxQkNySoDrkwnzk67Y3YZDyTtNY5pqY3Id5CVYUy3P3n5X5H7hm71bFNaXXpPJKF/6pJnCchk7PlHYv8nzmlCE2WdDIzajSSFHradY4giOrKMl8D6a/a6av1945XIwTiQ6W5ZLq2MxmhIbPB/tNGVYoVHEwsBzyfnHxzI=",
      },
      Station: "PA",
      id: "PA_NISAR_2022_008_09_30_59.ldf",
      restaged: false,
      rrst_files: [
        "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_16_000000000.vc24",
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_16_000000000.vc29",
        "NISAR_S198_PA_AS4_M00_P00115_R48_C49_G81_2022_008_09_03_26_000000000.vc24",
        "NISAR_S198_PA_AS4_M00_P00115_R42_C43_G81_2022_008_09_03_26_000000000.vc29",
      ],
      tags: ["ISL"],
    },
    objectid: "PA_NISAR_2022_008_09_30_59_LDF",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/PA_NISAR_2022_008_09_30_59.ldf",
      ],
      wasGeneratedBy: "task_id:8aff0b9c-7b81-4835-8bac-40d0fd25c19e",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/LDF/2022/008/PA_NISAR_2022_008_09_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/LDF/2022/008/PA_NISAR_2022_008_09_30_59_LDF",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:21:43.447007Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/LDF/2022/008/WFF_NISAR_2022_008_07_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/LDF/2022/008/WFF_NISAR_2022_008_07_30_59_LDF",
    ],
    creation_timestamp: "2021-03-30T19:21:33.556",
    dataset: "LDF",
    dataset_level: "NA",
    dataset_type: "LDF",
    id: "WFF_NISAR_2022_008_07_30_59_LDF",
    images: [],
    ipath: "hysds::data/LDF",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 7,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-WFF_NISAR_2022_008_07_30_59.ldf-20210330T192049.448598Z/output/WFF_NISAR_2022_008_07_30_59_LDF",
      FileName: "WFF_NISAR_2022_008_07_30_59.ldf",
      FileSize: 1383,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/WFF_NISAR_2022_008_07_30_59.ldf",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:48.752044Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:33.546350Z",
      ProductReceivedYear: 2021,
      ProductType: "LDF",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:46.412Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "FbNyJolsv0tlio/gIvYtuAZYYbiwm8+OMBOWIFhqXkpmu4cX0lGZnHKWWyNfU53e2gRO2emPYXyo502/44GBlRBY3z45qNTn",
          "x-amz-request-id": "X41HCYBC3MZH54GV",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "efff7ab8aef3c192069598694c151bfb",
            key: "ldf/WFF_NISAR_2022_008_07_30_59.ldf",
            sequencer: "0060637A0F55CC6C5D",
            size: 1383,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132048662",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132048660",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:46.412Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"X41HCYBC3MZH54GV","x-amz-id-2":"FbNyJolsv0tlio/gIvYtuAZYYbiwm8+OMBOWIFhqXkpmu4cX0lGZnHKWWyNfU53e2gRO2emPYXyo502/44GBlRBY3z45qNTn"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"ldf/WFF_NISAR_2022_008_07_30_59.ldf","size":1383,"eTag":"efff7ab8aef3c192069598694c151bfb","sequencer":"0060637A0F55CC6C5D"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "1d1712af95f0f25ced1b996d32bd1202",
        messageAttributes: {},
        messageId: "a94a3439-25c7-4cb3-adc9-c684b13355ef",
        receiptHandle:
          "AQEBVCGY/0rnE6qEmCS/xAM0gUWjOAB5+cNyke7e8h2XSIo2pdeGQheh+9yAZjICZLYVRqbFn+Gm0NwtKxN8gHm22vxirz1upiXN/rWe9nDCkpFHUrAn0MsUPSAbI9LiYs7dDdIjXm4SrAdCvO2mOaz6xYIxsSboneJzBJLK8iX0lrP9FNrZfdUI/Igd86Za/tLLlLLkO2QFy25Sgi3tfdsaIZIH6tICR/FBb6ARurJwZtA+UwdIUp5YogwHA8B4qE7AppaWD34lFdrwx9vG4oe66BNXvbw2vggq7fmTXN1W0sMPae81AuRHklnAvt6ojrqFv3E/O0aDC8a4e+40eWY+pg7AMWyar3zWQ1UZlVJzr6x2v2tMtWAMWs+gGd2pqFvw4Z++idlG1X0BaI09tUFxRNFtzQzWRWyl/X9awsBL5Ck=",
      },
      Station: "WFF",
      id: "WFF_NISAR_2022_008_07_30_59.ldf",
      restaged: false,
      rrst_files: [
        "NISAR_S198_WFF_SG11_M00_P00114_R21_C22_G81_2022_008_07_34_00_000000000.vc24",
        "NISAR_S198_WFF_PA12_M00_P00114_R81_C82_G81_2022_008_07_34_00_000000000.vc29",
        "NISAR_S198_WFF_WG5_M00_P00114_R01_C02_G81_2022_008_07_49_50_000000000.vc24",
        "NISAR_S198_WFF_AS4_M00_P00114_R60_C61_G81_2022_008_07_50_34_000000000.vc29",
        "NISAR_S198_WFF_AS4_M00_P00114_R47_C48_G81_2022_008_07_56_00_000000000.vc24",
        "NISAR_S198_WFF_AS4_M00_P00114_R64_C64_G81_2022_008_07_59_59_000000000.vc29",
        "NISAR_S198_WFF_AS4_M00_P00114_R26_C27_G81_2022_008_08_09_36_000000000.vc24",
        "NISAR_S198_WFF_SG11_M00_P00114_R97_C98_G81_2022_008_08_10_28_000000000.vc29",
        "NISAR_S198_WFF_SG11_M00_P00114_R30_C31_G81_2022_008_08_11_56_000000000.vc29",
        "NISAR_S198_WFF_WG5_M00_P00114_R31_C32_G81_2022_008_08_13_16_000000000.vc24",
        "NISAR_S198_WFF_WG5_M00_P00114_R05_C06_G81_2022_008_08_15_56_000000000.vc24",
        "NISAR_S198_WFF_AS4_M00_P00114_R49_C50_G81_2022_008_08_18_48_000000000.vc29",
        "NISAR_S198_WFF_AS4_M00_P00114_R14_C15_G81_2022_008_08_19_52_000000000.vc24",
        "NISAR_S198_WFF_SG11_M00_P00114_R11_C12_G81_2022_008_08_20_16_000000000.vc29",
        "NISAR_S198_WFF_WG5_M00_P00114_R15_C15_G81_2022_008_08_25_36_000000000.vc29",
        "NISAR_S198_WFF_AS4_M00_P00114_R73_C74_G81_2022_008_08_25_36_000000000.vc24",
      ],
      tags: ["ISL"],
    },
    objectid: "WFF_NISAR_2022_008_07_30_59_LDF",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/WFF_NISAR_2022_008_07_30_59.ldf",
      ],
      wasGeneratedBy: "task_id:4ca052f2-d113-4cd4-b394-9a6aa3588cd4",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/LDF/2022/008/WFF_NISAR_2022_008_07_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/LDF/2022/008/WFF_NISAR_2022_008_07_30_59_LDF",
    ],
    version: "1",
  },
  {
    "@timestamp": "2021-03-30T19:22:04.682883Z",
    browse_urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/browse/LDF/2022/008/SGS_NISAR_2022_008_08_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/browse/LDF/2022/008/SGS_NISAR_2022_008_08_30_59_LDF",
    ],
    creation_timestamp: "2021-03-30T19:21:55.814",
    dataset: "LDF",
    dataset_level: "NA",
    dataset_type: "LDF",
    id: "SGS_NISAR_2022_008_08_30_59_LDF",
    images: [],
    ipath: "hysds::data/LDF",
    metadata: {
      CreationDateTime: "2022-01-08T00:00:00.000000Z",
      CreationHour: 8,
      CreationMinute: 30,
      CreationSecond: 59,
      FileLocation:
        "/data/work/jobs/2021/03/30/19/21/ingest-staged-SGS_NISAR_2022_008_08_30_59.ldf-20210330T192059.652318Z/output/SGS_NISAR_2022_008_08_30_59_LDF",
      FileName: "SGS_NISAR_2022_008_08_30_59.ldf",
      FileSize: 560,
      ISL_urls: [
        "s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/SGS_NISAR_2022_008_08_30_59.ldf",
      ],
      Lambda_trigger_time: "2021-03-30T19:20:59.115605Z",
      Mission: "NISAR",
      ProductReceivedDay: "30",
      ProductReceivedMonth: "03",
      ProductReceivedTime: "2021-03-30T19:21:55.807742Z",
      ProductReceivedYear: 2021,
      ProductType: "LDF",
      S3_event_record: {
        awsRegion: "us-west-2",
        eventName: "ObjectCreated:Put",
        eventSource: "aws:s3",
        eventTime: "2021-03-30T19:20:56.430Z",
        eventVersion: "2.1",
        requestParameters: { sourceIPAddress: "100.64.122.95" },
        responseElements: {
          "x-amz-id-2":
            "c8XRtTj4Sulb9nSesLRgBYUrCBfTpefCP0EMygp2/2i9lVv2jrqZHrFZTYXrDys4M8Mn4YyPkayEVazKYg8BdzPRZ4ztiHUM",
          "x-amz-request-id": "PVP952M7XZRJ9E2C",
        },
        s3: {
          bucket: {
            arn: "arn:aws:s3:::nisar-dev-isl-fwd-bporeh",
            name: "nisar-dev-isl-fwd-bporeh",
            ownerIdentity: { principalId: "AWZVWFO1088SI" },
          },
          configurationId: "sqs_event",
          object: {
            eTag: "5d29b097e73dab31888c8cc65c9345ee",
            key: "ldf/SGS_NISAR_2022_008_08_30_59.ldf",
            sequencer: "0060637A191675BCDA",
            size: 560,
          },
          s3SchemaVersion: "1.0",
        },
        userIdentity: {
          principalId: "AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d",
        },
      },
      SQS_record: {
        attributes: {
          ApproximateFirstReceiveTimestamp: "1617132059042",
          ApproximateReceiveCount: "1",
          SenderId: "AIDAJFWZWTE5KRAMGW5A2",
          SentTimestamp: "1617132059041",
        },
        awsRegion: "us-west-2",
        body:
          '{"Records":[{"eventVersion":"2.1","eventSource":"aws:s3","awsRegion":"us-west-2","eventTime":"2021-03-30T19:20:56.430Z","eventName":"ObjectCreated:Put","userIdentity":{"principalId":"AWS:AROAT6GZRFRQICYUJN4LT:i-0c23cd31595426a3d"},"requestParameters":{"sourceIPAddress":"100.64.122.95"},"responseElements":{"x-amz-request-id":"PVP952M7XZRJ9E2C","x-amz-id-2":"c8XRtTj4Sulb9nSesLRgBYUrCBfTpefCP0EMygp2/2i9lVv2jrqZHrFZTYXrDys4M8Mn4YyPkayEVazKYg8BdzPRZ4ztiHUM"},"s3":{"s3SchemaVersion":"1.0","configurationId":"sqs_event","bucket":{"name":"nisar-dev-isl-fwd-bporeh","ownerIdentity":{"principalId":"AWZVWFO1088SI"},"arn":"arn:aws:s3:::nisar-dev-isl-fwd-bporeh"},"object":{"key":"ldf/SGS_NISAR_2022_008_08_30_59.ldf","size":560,"eTag":"5d29b097e73dab31888c8cc65c9345ee","sequencer":"0060637A191675BCDA"}}}]}',
        eventSource: "aws:sqs",
        eventSourceARN:
          "arn:aws:sqs:us-west-2:271039147104:nisar-bporeh-269-isl-queue",
        md5OfBody: "ef5123ed21aa01180fa58469fe5604e8",
        messageAttributes: {},
        messageId: "c5a2d04e-2ffb-4343-ad2d-b74f9a9e38e9",
        receiptHandle:
          "AQEBdbaLAYiyJV4DKr+MPhBxZarymYYDJRJpoMYv0mwJHOfU0BK5RKmyUqTVfQpIVI8xjJgYM+TLqlMVNKhXflY9vbX5Iq8wSUH6AXqI+cuCRXMvMQXpieRAuFB4wIcOtUMofJrkPro27sVTNMNKVkQicLjIgBDRPokcR+f/YIbPtoq6xac9x56YIzcJrBo1XIVNeCCPXAIajFWZPfA2ObSAP+RXMK8Z3ozRNUMRN0YJUtZZK21XiuGwoMpycEygsOrruprMZiqoHXSIdJiuxio8UKKGcz+lgWLELX45NQZuwlR6XT2GCHwwgDUgtW3zGz4qYvuU5e9i/Gtfo752lAp7PGCEzkLk/1fMWYvzRWw5kzE9V5JvKLaRfmJRc4owXwEg24I+8s9+iK+11RaGI8GpMFAOW/faQRUrA65ed3nHv28=",
      },
      Station: "SGS",
      id: "SGS_NISAR_2022_008_08_30_59.ldf",
      restaged: false,
      rrst_files: [
        "NISAR_S198_SGS_AS4_M00_P00114_R33_C34_G81_2022_008_08_25_36_000000000.vc24",
        "NISAR_S198_SGS_SG11_M00_P00115_R83_C84_G81_2022_008_08_25_36_000000000.vc29",
        "NISAR_S198_SGS_AS4_M00_P00115_R27_C28_G81_2022_008_09_00_20_000000000.vc29",
        "NISAR_S198_SGS_WG5_M00_P00115_R50_C51_G81_2022_008_09_00_32_000000000.vc24",
        "NISAR_S198_SGS_PA12_M00_P00115_R80_C81_G81_2022_008_09_03_16_000000000.vc24",
        "NISAR_S198_SGS_WG5_M00_P00115_R96_C97_G81_2022_008_09_03_16_000000000.vc29",
      ],
      tags: ["ISL"],
    },
    objectid: "SGS_NISAR_2022_008_08_30_59_LDF",
    prov: {
      wasDerivedFrom: [
        "url:s3://s3-us-west-2.amazonaws.com/nisar-dev-isl-fwd-bporeh/ldf/SGS_NISAR_2022_008_08_30_59.ldf",
      ],
      wasGeneratedBy: "task_id:dc1b22b7-7522-4b51-802b-d2e87dc3b272",
    },
    starttime: "2022-01-08T00:00:00.000000Z",
    system_version: "1",
    urls: [
      "http://nisar-dev-lts-fwd-bporeh.s3-website-us-west-2.amazonaws.com/products/LDF/2022/008/SGS_NISAR_2022_008_08_30_59_LDF",
      "s3://s3-us-west-2.amazonaws.com:80/nisar-dev-lts-fwd-bporeh/products/LDF/2022/008/SGS_NISAR_2022_008_08_30_59_LDF",
    ],
    version: "1",
  },
];

export default data;
