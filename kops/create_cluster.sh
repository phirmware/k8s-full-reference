#! /bin/sh

kops create cluster \
  --name=k8s.phirmware.xyz \
  --state=phirmware.xyz-kops-nyurt \
  --zones=eu-west-2a \
  --node-count=2 \
  --node-size=t3.micro \
  --master-size=t3.micro \
  --dns-zone=k8s.phirmware.xyz
