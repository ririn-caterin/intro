import { Button } from "@/components/shared/button";

const UIButtonPage = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col min-h-screen">
      <div className="items-center gap-x-3 gap-y-3 grid grid-cols-3">
        <Button color="primary" variant="full">
          Button #1
        </Button>
        <Button color="primary" variant="outline">
          Button #1
        </Button>
        <Button color="primary" variant="text">
          Button #1
        </Button>
        <Button color="danger" variant="full">
          Button #2
        </Button>
        <Button color="danger" variant="outline">
          Button #2
        </Button>
        <Button color="danger" variant="text">
          Button #2
        </Button>
        <Button color="warning" variant="full">
          Button #3
        </Button>
        <Button color="warning" variant="outline">
          Button #3
        </Button>
        <Button color="warning" variant="text">
          Button #3
        </Button>
        <Button color="info" variant="full">
          Button #4
        </Button>
        <Button color="info" variant="outline">
          Button #4
        </Button>
        <Button color="info" variant="text">
          Button #4
        </Button>
      </div>
    </div>
  );
};

export default UIButtonPage;
