import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2";

exports.handler = async function () {
  
  const client = new EC2Client({});
    const { Vpcs } = await client.send(
      new DescribeVpcsCommand({
        Filters: [{ Name: "is-default", Values: ["true"] }],
      }),
    );
    
    if ( Vpcs ) {
      console.log( "Default VPC cidr = ", Vpcs[0].CidrBlock )
    }
    else {
      console.log( "No default VPC" )
    }

};
