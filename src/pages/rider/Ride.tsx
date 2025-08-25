import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useRideRequestMutation } from "@/redux/features/rider/rider.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const Ride = () => {
  const { data: userData } = useUserInfoQuery(undefined);
  const [rideRequest] = useRideRequestMutation();
  const rideRequestSchema = z.object({
    riderId: z.string({ error: "riderId must be a string" }),
    vehicleType: z.string({ error: "Vehicle type must be a string" }),

    latPickup: z
      .string()
      .min(1, "latPickup number is required and minimum 1")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "latPickup number be a positive number",
      }),
    lonPickup: z
      .string()
      .min(1, "lonPickup number is required and minimum 1")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "lonPickup number be a positive number",
      }),

    latDestination: z
      .string()
      .min(1, "latDestination number is required and minimum 1")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "latDestination number be a positive number",
      }),
    lonDestination: z
      .string()
      .min(1, "lonDestination number is required and minimum 1")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "lonDestination number be a positive number",
      }),
  });
  const form = useForm<z.infer<typeof rideRequestSchema>>({
    resolver: zodResolver(rideRequestSchema),
    defaultValues: {
      riderId: "",
      vehicleType: "",
      latPickup: "",
      lonPickup: "",
      latDestination: "",
      lonDestination: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const rideReqData = {
      riderId: userData?.data?.data?._id,
      vehicleType: data.vehicleType,
      pickup: {
        lat: Number(data.latPickup),
        lon: Number(data.lonPickup),
      },
      destination: {
        lat: Number(data.latDestination),
        lon: Number(data.lonDestination),
      },
    };
    const res = await rideRequest(rideReqData);
    if (res?.data?.success) {
      toast.success(res?.data?.message);
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle> Request a Ride !</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="ride-request"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Vehicle Type <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="BIKE">BIKE</SelectItem>
                        <SelectItem value="CAR">CAR</SelectItem>
                        <SelectItem value="CNG">CNG</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="latPickup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Latitude Pickup{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lonPickup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Longitude Pickup{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="latDestination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Latitude Destination{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lonDestination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Longitude Destination{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="ride-request" className="w-full">
            Request
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Ride;
