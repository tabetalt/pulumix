// Copyright 2016-2021, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package provider

import (
	iam "github.com/pulumi/pulumi-google-native/sdk/go/google/iam/v1"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// The set of arguments for creating a ServiceAccount component resource.
type ServiceAccountArgs struct {
	// The HTML content for index.html.
	IndexContent pulumi.StringInput `pulumi:"indexContent"`
}

// The ServiceAccount component resource.
type ServiceAccount struct {
	pulumi.ResourceState

	Bucket     *iam.ServiceAccount `pulumi:"bucket"`
	WebsiteUrl pulumi.StringOutput `pulumi:"websiteUrl"`
}

// NewServiceAccount creates a new ServiceAccount component resource.
func NewServiceAccount(ctx *pulumi.Context,
	name string, args *ServiceAccountArgs, opts ...pulumi.ResourceOption) (*ServiceAccount, error) {
	if args == nil {
		args = &ServiceAccountArgs{}
	}

	component := &ServiceAccount{}
	err := ctx.RegisterComponentResource("pulumix:index:ServiceAccount", name, component, opts...)
	if err != nil {
		return nil, err
	}

	// Create a bucket and expose a website index document.
	bucket, err := iam.NewServiceAccount(ctx, name, &iam.ServiceAccountArgs{
		AccountId: pulumi.String("hello-there"),
	}, pulumi.Parent(component))
	if err != nil {
		return nil, err
	}

	component.Bucket = bucket

	if err := ctx.RegisterResourceOutputs(component, pulumi.Map{
		"bucket": bucket,
	}); err != nil {
		return nil, err
	}

	return component, nil
}
