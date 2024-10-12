## utilities, info dump for development 
AWS CLI command to generate img links from s3: 

`aws s3api list-objects --bucket dizzy-wedding-site --query "Contents[].{Key: Key}" --output json | jq -r '.[] | "https://dizzy-wedding-site.s3.amazonaws.com/\(.Key)"'`